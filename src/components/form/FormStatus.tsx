import LineForm from "./LineForm";

enum StatusEnum {
	IN_PROGRESS = "in progress",
	SCOPING = "scoping",
	COMPLETED = "completed"
}

function FormStatus() {
	return (
		<LineForm name="Statut">
			<select name="status">
				{Object.values(StatusEnum).map((status: string) => {
					return (
						<option value={status}>
							{status}
						</option>
					);
				})}
			</select>
		</LineForm>);
}

export default FormStatus;
