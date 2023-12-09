import LineForm from "./LineForm";

interface FormDatesProps {
	start_date?: string,
	end_date?: string | null
}

function FormDates({start_date, end_date}: FormDatesProps) {
	
	return (
		<LineForm name="Dates">
			<input type="date" name="start-date" defaultValue={start_date} />
			<p>➔</p>
			<input type="date" name="end-date" defaultValue={end_date ? end_date : start_date} />
		</LineForm>
	);
}

export default FormDates;
