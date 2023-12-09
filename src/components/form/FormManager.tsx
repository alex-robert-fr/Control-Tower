import {useQuery} from "react-query";
import LineForm from "./LineForm";
import {z} from "zod";
import {useEffect, useState} from "react";

const ManagerSchema = z.object({
	id: z.number(),
	name: z.string(),
	lastname: z.string()
});

type Manager = z.infer<typeof ManagerSchema>;

interface FormManagerProps {
	manager_id?: number
}

function FormManager({manager_id}: FormManagerProps) {
	const fetchManager = async () => {
		const res = await fetch("http://localhost:3000/manager/");
		const data = await res.json();
		return (ManagerSchema.array().parse(data));
	}
	const {data, isLoading, error} = useQuery<Manager[], Error>("manager", fetchManager);

	const [selectedManagerId, setSeletedManagerId] = useState(manager_id);
	{/*
	const handleChangeManager = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSeletedManagerId(parseInt(event.target.value));
	}
	*/}

	useEffect(() => {
		if (manager_id !== undefined) {
			setSeletedManagerId(manager_id);
		}
	}, [manager_id]);

	return (
		<LineForm name="Manager">
			<div className="flex gap-x-5">
			{isLoading ? (
				<p>Chargement...</p>
			) : error ? (
				<p>Une erreur est survenue</p>
			) : data && data.length > 0 ? (
				data.map((managers: Manager, index: number) => {
				return (
					<div key={index}>
						<input className="hidden" type="radio" id={`${managers.name} ${managers.lastname}`} name="manager" value={managers.id} defaultChecked={managers.id === selectedManagerId} />
						<label htmlFor={`${managers.name} ${managers.lastname}`} className={managers.id === selectedManagerId ? "border border-gray-300 p-2 rounded-full" : "p-2 border border-white"}>{`${managers.name} ${managers.lastname}`}</label>
					</div>
				);
			})
			) : <p>Aucun manager disponible.</p>
			}
			</div>
		</LineForm>
	);
}

export default FormManager;
