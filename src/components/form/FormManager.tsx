import {useQuery} from "react-query";
import {isEmpty} from "../../Utils";
import LineForm from "./LineForm";

interface Manager {
	id: number,
	name: string,
	lastname: string
}

function FormManager() {
	const fetchManager = async () => {
		const res = await fetch("http://localhost:3000/manager/");
		return (res.json());
	}
	const {data, isLoading, error} = useQuery("manager", fetchManager);

	return (
		<LineForm name="Manager">
			<div className="flex gap-x-5">
			{!isEmpty(data) && data.map((managers: Manager, index: number) => {
				return (
					<div key={index}>
						<input className="hidden" type="radio" id={`${managers.name} ${managers.lastname}`} name="manager" value={`${managers.name} ${managers.lastname}`} defaultChecked={index === 0} />
						<label htmlFor={`${managers.name} ${managers.lastname}`} className={index === 0 ? "border border-gray-300 p-2 rounded-full" : ""}>{`${managers.name} ${managers.lastname}`}</label>
					</div>
				);
			})}
			</div>
		</LineForm>
	);
}

export default FormManager;
