import React, {useEffect, useState} from "react";
import LineForm from "./LineForm";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {Project, ProjectSchema, StatusEnum} from "../../App";
import {UseMutationResult, useMutation, useQueryClient} from "@tanstack/react-query";

interface FormStatusProps {
	projectData?: Project,
	isLoading: boolean,
	isError: boolean,
}

function FormStatus({projectData, isLoading, isError}:FormStatusProps) {
	var projectStatus: string;
	if (projectData?.status !== undefined)
		projectStatus = projectData.status;
	else
		projectStatus = StatusEnum.IN_PROGRESS;

	const [selectedStatus, setSelectedStatus] = useState(projectStatus);
	useEffect(() => {
		setSelectedStatus(projectStatus);
	}, [projectStatus]);

	const generateNewData = (event :React.ChangeEvent<HTMLSelectElement>) => {
		const newStatus = event.target.value;
		const statusKey = Object.keys(StatusEnum).find(key => StatusEnum[key as keyof typeof StatusEnum] === newStatus);
		if (projectData && statusKey)
		{
			var updateData: Project = {
				...projectData,
				status: StatusEnum[statusKey as keyof typeof StatusEnum]
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

	const updateStatusInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedStatus(event.target.value)
		generateNewData(event);
	};

	return (
		<LineForm name="Statut">
			{isLoading || isError ? (
					<Skeleton containerClassName="flex-1" />
			) : (
				<select name="status" value={selectedStatus} onChange={updateStatusInput}>
				{Object.values(StatusEnum).map((status_enum: string, index: number) => {
					return (
						<option key={index} value={status_enum}>
							{status_enum}
						</option>
					);
				})}
			</select>
			)}
		</LineForm>);
}

export default FormStatus;
