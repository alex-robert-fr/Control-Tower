import React, {useEffect, useState} from "react";
import LineForm from "./LineForm";

enum StatusEnum {
	IN_PROGRESS = "in progress",
	SCOPING = "scoping",
	COMPLETED = "completed"
}

interface FormStatusProps {
	status?: string,
	callApi: Function
}

function FormStatus({status, callApi}: FormStatusProps) {
	const [selectedStatus, setSelectedStatus] = useState(status);
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedStatus(event.target.value)
		callApi(event.target.value, undefined);
	};
	useEffect(() => {
		setSelectedStatus(status);
	}, [status]);

	return (
		<LineForm name="Statut">
			<select name="status" value={selectedStatus} onChange={handleChange}>
				{Object.values(StatusEnum).map((status_enum: string, index: number) => {
					return (
						<option key={index} value={status_enum}>
							{status_enum}
						</option>
					);
				})}
			</select>
		</LineForm>);
}

export default FormStatus;
