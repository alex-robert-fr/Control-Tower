import {z} from "zod";
import LineForm from "./LineForm";
import {useQuery} from "@tanstack/react-query";
import React, {useEffect, useState} from "react";

const RiskModelSchema = z.object({
	id: z.number(),
	model_name: z.string()
});

type RiskModel = z.infer<typeof RiskModelSchema>;

interface FormModelProps {
	model_id?: number | null,
	callApi: Function,
	numEvaluation?: number,
}

function FormModel({model_id, callApi, numEvaluation}: FormModelProps) {
	if (numEvaluation === undefined)
		numEvaluation = 0;
	
	const fetchRiskModel = async () => {
		const res = await fetch("http://localhost:3000/risk_model");
		const data = await res.json();
		return (RiskModelSchema.array().parse(data));
	}
	const {data, isLoading, error} = useQuery<RiskModel[], Error>({
		queryKey: ["model"], 
		queryFn: fetchRiskModel
	});

	const [selectedModel, setSelectedModel] = useState<number | undefined | null>(model_id === null ? -1 : model_id);
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedModel(parseInt(event.target.value));
		callApi("", parseInt(event.target.value) === -1 ? null : parseInt(event.target.value));
	};
	useEffect(() => {
		setSelectedModel(model_id);
	}, [model_id]);

	return (
		<LineForm name="Modèle de risque">
				{isLoading ? (
					<p>Chargement...</p>
				) : error ? (
					<p>Une erreur est survenue</p>
				) : (
					<select name="model" value={selectedModel === null ? -1 : selectedModel} onChange={handleChange} disabled={numEvaluation > 0} >
					<option value={-1}>
						-- Choisissez un modèle de risque --
					</option>
					{data && data.length > 0 ? (
						data.map((model: RiskModel, index: number) => {
							return (
								<option key={index} value={model.id}>
									{model.model_name}
								</option>
							);
						})
					) : <option>Aucun modèle disponible</option>
					}
					</select>
				)}
		</LineForm>
	);
}

export default FormModel;
