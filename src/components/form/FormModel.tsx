import LineForm from "./LineForm";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {Project, RiskModel, RiskModelSchema} from "../../App";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React, {useState} from "react";

interface FormModelProps {
	projectData?: Project
	model_id?: number | null,
	numEvaluation: number,
}

function FormModel({projectData, model_id, numEvaluation}: FormModelProps) {
	if (model_id === undefined || model_id === null)
		model_id = -1;
	
	const fetchRiskModel = async () => {
		const res = await fetch("http://localhost:3000/risk_model");
		const data = await res.json();
		return (RiskModelSchema.array().parse(data));
	}
	const {data, isLoading, isError} = useQuery<RiskModel[], Error>({
		queryKey: ["model"], 
		queryFn: fetchRiskModel
	});

	const generateNewData = (event: React.ChangeEvent<HTMLSelectElement>) => {
		if (projectData !== undefined) {
			let updateData = {
				...projectData,
				risk_model_id: parseInt(event.target.value)
			};
			mutation.mutate(updateData);
		}
	};

	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: (newData: Project) => {
			return (fetch("http://localhost:3000/project_management/project/1", {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newData),
			})
			.then(res => res.json())
		)},
		onSuccess() {
			queryClient.invalidateQueries({queryKey: ["project"]});
		},
	});

	const updateModelInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
		generateNewData(event);
	};

	return (
		<LineForm name="Modèle de risque">
				{isLoading || isError ? (
					<Skeleton containerClassName="flex-1" />
				) : (
					<select name="model" value={model_id === null ? -1 : model_id} onChange={updateModelInput} >
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
