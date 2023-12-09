import {z} from "zod";
import Section from "./Section";
import FormManager from "./form/FormManager";
import FormModel from "./form/FormModel";
import FormStatus from "./form/FormStatus";
import LineForm from "./form/LineForm";
import {useQuery} from "react-query";
import Description from "./Description";
import DomainAndProgram from "./DomainAndProgram";

enum StatusEnum {
	IN_PROGRESS = "in progress",
	SCOPING = "scoping",
	COMPLETED = "completed"
};

const ProjectSchema = z.object({
	id: z.number(),
	name: z.string(),
	reference: z.string(),
	status: z.nativeEnum(StatusEnum),
	manager_id: z.number(),
	risk_model_id: z.number(),
	start_date: z.string(),
	end_date: z.string().nullable().optional(),
	description: z.string(),
	domain: z.number(),
	program: z.number().nullable().optional()
});

type Project = z.infer<typeof ProjectSchema>;


function Info() {
	const fetchProject = async () => {
		const res = await fetch("http://localhost:3000/project_management/project/1");
		const data = await res.json();
		return (ProjectSchema.parse(data));
	};
	const {data, isLoading, error} = useQuery<Project, Error>("project", fetchProject);
	
	return (
		<>
			<h1 className="text-2xl uppercase font-bold text-left ml-6 pt-6">
				{data?.name} ({data?.reference})
			</h1>
			<section className="m-6 mb-0 grid grid-cols-2 gap-4">
				<Section className="row-span-2" title="Informations">
					<div className="flex flex-col">
						<FormManager manager_id={data?.manager_id} />
						<FormStatus status={data?.status} />
						<FormModel model_id={data?.risk_model_id} />
						<LineForm name="Dates">
							<input type="date" name="start-date" defaultValue="2023-12-07" />
							<p>➔</p>
							<input type="date" name="end-date" defaultValue="2023-12-08" />
						</LineForm>
					</div>
				</Section>
				<Description description={data?.description} />
				<DomainAndProgram />
				<p className="justify-self-start self-center text-emerald-500 font-bold text-lg">
					Évaluations validées ✓
				</p>
				<button className="col-start-2 justify-self-end bg-blue-500 text-white font-bold px-4 py-1.5 rounded-md my-2">Nouvelle évaluation</button>
			</section>
		</>
	);
}

export default Info;
