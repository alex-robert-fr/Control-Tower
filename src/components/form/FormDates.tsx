import LineForm from "./LineForm";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface FormDatesProps {
	isLoadingProject: boolean,
	isErrorProject: boolean,
	start_date?: string,
	end_date?: string | null
}

function FormDates({isLoadingProject, isErrorProject, start_date, end_date}: FormDatesProps) {
	
	return (
		<LineForm name="Dates">
			{isLoadingProject || isErrorProject ? (
				<Skeleton containerClassName="flex-1" />
			) : (
				<div className="flex">
					<input type="date" name="start-date" defaultValue={start_date} disabled />
					<p>➔</p>
					<input type="date" name="end-date" defaultValue={end_date ? end_date : start_date} disabled />
				</div>
			)}
		</LineForm>
	);
}

export default FormDates;
