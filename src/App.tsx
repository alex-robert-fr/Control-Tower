import {z} from 'zod';
import './App.css';
import Array from './components/Array.tsx';
import Info from './components/Info.tsx';
import {useEffect} from 'react';
import {useQuery} from 'react-query';

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
	risk_model_id: z.number(),
	start_date: z.string(),
	end_date: z.string().nullable().optional(),
	description: z.string(),
	domain: z.number(),
	program: z.number().nullable().optional(),
	evaluation: EvaluationSchema.array()
});

export type Project = z.infer<typeof ProjectSchema>;
export type Evaluation = z.infer<typeof EvaluationSchema>;


function App() {
	const fetchProject = async () => {
		const res = await fetch("http://localhost:3000/project_management/project/1");
		const data = await res.json();
		return (ProjectSchema.parse(data));
	};
	const {data, isLoading, error} = useQuery<Project, Error>("project", fetchProject);
	return (
    <main className="shadow-custom rounded-lg pb-1">
			<Info data={data} />
			<Array evaluations={data?.evaluation} />
    </main>
  )
}

export default App;
