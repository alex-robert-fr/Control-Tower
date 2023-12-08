import LineForm from "./LineForm";

function FormStatus() {
	return (
		<LineForm name="Statut">
			<select name="status">
				<option value="en cadrage">
					En cadrage
				</option>
				<option value="en cours">
					En cours
				</option>
				<option value="terminé">
					Terminé
				</option>
			</select>
		</LineForm>);
}

export default FormStatus;
