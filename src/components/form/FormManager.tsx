import {useQuery} from "react-query";
import LineForm from "./LineForm";
import {z} from "zod";

const ManagerSchema = z.object({
	id: z.number(),
	name: z.string(),
	lastname: z.string()
});

type Manager = z.infer<typeof ManagerSchema>;

function FormManager() {
	const fetchManager = async () => {
		const res = await fetch("http://localhost:3000/manager/");
		const data = await res.json();
		return (ManagerSchema.array().parse(data));
	}
	const {data, isLoading, error} = useQuery<Manager[], Error>("manager", fetchManager);

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
						<input className="hidden" type="radio" id={`${managers.name} ${managers.lastname}`} name="manager" value={`${managers.name} ${managers.lastname}`} defaultChecked={index === 0} />
						<label htmlFor={`${managers.name} ${managers.lastname}`} className={index === 0 ? "border border-gray-300 p-2 rounded-full" : ""}>{`${managers.name} ${managers.lastname}`}</label>
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
