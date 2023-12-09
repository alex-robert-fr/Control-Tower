import {z} from "zod";
import LineForm from "./LineForm";
import {useQuery} from "react-query";
import React, {useEffect, useState} from "react";

const RiskModelSchema = z.object({
	id: z.number(),
	model_name: z.string()
});

type RiskModel = z.infer<typeof RiskModelSchema>;

interface FormModelProps {
	model_id?: number,
	callApi: Function
}

function FormModel({model_id, callApi}: FormModelProps) {
	
	const fetchRiskModel = async () => {
		const res = await fetch("http://localhost:3000/risk_model");
		const data = await res.json();
		return (RiskModelSchema.array().parse(data));
	}
	const {data, isLoading, error} = useQuery<RiskModel[], Error>("model", fetchRiskModel);

	const [selectedModel, setSelectedModel] = useState(model_id);
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedModel(parseInt(event.target.value));
		callApi("", parseInt(event.target.value));
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
					<select name="model" value={selectedModel} onChange={handleChange}>
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
