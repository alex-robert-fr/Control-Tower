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
	status: z.string()
});

const ProjectSchema = z.object({
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


function App() {
	const fetchProject = async () => {
		const res = await fetch("http://localhost:3000/project_management/project/1");
		const data = await res.json();
		return (ProjectSchema.parse(data));
	};
	const {data, isLoading, isError} = useQuery<Project, Error>({
		queryKey: ["project"],
		queryFn: fetchProject
	});
	return (
    <main className="shadow-custom rounded-lg pb-1">
			{false ? (
				<p>Erreur</p>
			) : (
				<>
					<Info data={data} isLoading={isLoading} isError={isError} />
					<Array data={data} isLoading={isLoading} />
				</>
			)}		
    </main>
  )
}

export default App;
