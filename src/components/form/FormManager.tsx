import {useQuery} from "@tanstack/react-query";
import LineForm from "./LineForm";
import {z} from "zod";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ManagerSchema = z.object({
	id: z.number(),
	name: z.string(),
	lastname: z.string()
});

type Manager = z.infer<typeof ManagerSchema>;

interface FormManagerProps {
	projectManagerId?: number
}

function FormManager({projectManagerId}: FormManagerProps) {

	const fetchManager = async () => {
		const res = await fetch("http://localhost:3000/manager/");
		const data = await res.json();
		return (ManagerSchema.array().parse(data));
	}
	const {data, isLoading, isError} = useQuery<Manager[], Error>({
		queryKey: ["manager"],
		queryFn: fetchManager
	});

	return (
		<LineForm name="Manager">
			{isLoading || isError ? (
				<Skeleton containerClassName="flex-1" />
			) : (
				<div className="flex gap-x-5">
				{data !== undefined && data.map((manager: Manager, index: number) => {
					return (
						<div className="" key={index}>
							<input className="hidden" type="radio" id={`${manager.name} ${manager.lastname}`} name="manager" value={manager.id} defaultChecked={manager.id === projectManagerId} />
							<label htmlFor={`${manager.name} ${manager.lastname}`} className={manager.id === projectManagerId ? "border border-gray-300 p-2 rounded-full" : "p-2 border border-white"}>{`${manager.name} ${manager.lastname}`}</label>
						</div>
					);	
				})}
				</div>
			)}
			
		</LineForm>
	);
}

export default FormManager;
