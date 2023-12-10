import React, {useEffect, useState} from "react";
import LineForm from "./LineForm";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {StatusEnum} from "../../App";

interface FormStatusProps {
	projectStatus?: string,
	isLoading: boolean,
	isError: boolean,
	callApi: Function
}

function FormStatus({projectStatus, isLoading, isError, callApi}: FormStatusProps) {
	const [selectedStatus, setSelectedStatus] = useState(projectStatus);
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
 	//	setSelectedStatus(event.target.value)
	//	callApi(event.target.value, undefined);
	};
	useEffect(() => {
		setSelectedStatus(projectStatus);
	}, [projectStatus]);

	return (
		<LineForm name="Statut">
			{isLoading || isError ? (
					<Skeleton containerClassName="flex-1" />
			) : (
				<select name="status" value={selectedStatus} onChange={handleChange}>
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
