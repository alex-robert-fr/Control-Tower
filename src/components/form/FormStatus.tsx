import React, {useEffect, useState} from "react";
import LineForm from "./LineForm";

enum StatusEnum {
	IN_PROGRESS = "in progress",
	SCOPING = "scoping",
	COMPLETED = "completed"
}

interface FormStatusProps {
	status?: string,
}

function FormStatus({status}: FormStatusProps) {
	const [selectedStatus, setSelectedStatus] = useState(status);
	useEffect(() => {
		setSelectedStatus(status);
	}, [status]);
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedStatus(event.target.value)
	};
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
