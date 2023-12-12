import {z} from 'zod';
import './App.css';
import Array from './components/Array.tsx';
import Info from './components/Info.tsx';
import {useQuery} from '@tanstack/react-query';

export const RiskModelSchema = z.object({
	id: z.number(),
	model_name: z.string()
});

export const DomainSchema = z.object({
	id: z.number(),
	name: z.string()
});

export const ProgramSchema = z.object({
	id: z.number(),
	name: z.string()
});

export enum StatusEnum {
	IN_PROGRESS = "in progress",
	SCOPING = "scoping",
	COMPLETED = "completed"
};

const EvaluationSchema = z.object({
	id: z.number(),
	name: z.string(),
	creation_date: z.string(),
	validation_date: z.string(),
	status: z.string() //TODO: Attention ici enum
});

export const ProjectSchema = z.object({
	id: z.number(),
	name: z.string(),
	reference: z.string(),
	status: z.nativeEnum(StatusEnum),
	manager_id: z.number(),
	risk_model_id: z.number().nullable(),
	start_date: z.string(),
	end_date: z.string().nullable().optional(),
	description: z.string(),
	domain: z.number(),
	program: z.number().nullable().optional(),
	evaluation: EvaluationSchema.array()
});

export type RiskModel = z.infer<typeof RiskModelSchema>;
export type Domain = z.infer<typeof DomainSchema>;
export type Program = z.infer<typeof ProgramSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Evaluation = z.infer<typeof EvaluationSchema>;

export const fetchProject = async () => {
	const res = await fetch("http://localhost:3000/project_management/project/1");
	const data = await res.json();
	return (ProjectSchema.parse(data));
};

function App() {
	
	const {data, isLoading, isError} = useQuery<Project, Error>({
		queryKey: ["project"],
		queryFn: fetchProject
	});
	return (
		<>
			{isError ? (
				<div className="flex flex-col items-center h-screen justify-center">
					<p className="text-6xl font-bold mb-3">Erreur 500</p>
					<p className="text-2xl w-3/4">Désolé, quelque chose s'est mal passé de notre côté. Notre équipe technique est en train de résoudre le problème. Veuillez réessayer ultérieurement.</p>
				</div>
			) : (
				<main className="sm:shadow-custom sm:rounded-lg sm:m-8 sm:pb-1">
					<Info data={data} isLoading={isLoading} isError={isError} />
					<Array dataProject={data} isLoadingProject={isLoading} isErrorProject={isError} modelId={data?.risk_model_id} />
				</main>
			)}		
		</>
  )
}

export default App;
