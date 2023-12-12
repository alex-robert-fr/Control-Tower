import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Evaluation, EvaluationEnum, Project, StatusEnum} from "../App";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ArrayProps {
	dataProject?: Project,
	isLoadingProject: boolean,
	isErrorProject: boolean
	modelId?: number | null
}

function Array({dataProject, isLoadingProject, isErrorProject, modelId}: ArrayProps) {
	let evaluations: Evaluation[] | undefined;
	let numEvaluation: number = 0;
	if (modelId === undefined || modelId === null)
		modelId = -1;
	if (dataProject !== undefined)
	{
		evaluations = dataProject.evaluation;
		numEvaluation = evaluations.length;
	}

	const formatDate = (timestamp: number) => {
		const date = new Date(timestamp);
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const day = date.getDate().toString().padStart(2, '0');

		return (`${year}-${month}-${day}`);
	};

	const generateNewData = () => {
		if (dataProject !== undefined) {
			let nowDate = Date.now();
			let newId;
			if (numEvaluation > 0 && evaluations !== undefined)
				newId = evaluations.reduce((acc, obj) => obj.id > acc ? obj.id : acc, evaluations[0].id);
			else
				newId = -1;
			let newEvaluation = {
				id: newId + 1,
				name: "new test evaluation",
				creation_date: formatDate(nowDate),
				validation_date: formatDate(nowDate),
				status: EvaluationEnum.VALIDATED
			};
			console.log(newEvaluation)
			let updateData =  {
				...dataProject,
				evaluation: [...dataProject.evaluation, newEvaluation]
			};
			mutation.mutate(updateData);
		}
	};

	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: (newData: Project) => {
			return (fetch("http://localhost:3000/project_management/project/1", {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newData),
			})
			.then(res => res.json())
		)},
		onSuccess() {
			queryClient.invalidateQueries({queryKey: ["project"]});
		},
	});

	const updateArray = () => {
		generateNewData();
	};


	return (
		<>
			<section className="grid grid-cols-2 mx-6" >
				<p className="justify-self-start self-center text-emerald-500 font-bold text-lg">
					Évaluations validées ✓
				</p>
				<button className="transition col-start-2 justify-self-end bg-blue-500 text-white font-bold px-4 py-1.5 rounded-md my-2 hover:bg-blue-600 active:bg-blue-700 disabled:bg-blue-200" onClick={updateArray} disabled={modelId === -1}>Nouvelle évaluation</button>
			</section>
				<section className="max-md:overflow-x-scroll mx-6 my-2 border-2 border-gray-150 rounded-xl">
					<table className="table-fixed w-full">
						<thead className="border-b text-sm text-gray-500">
							<tr>
								<th className="p-2 rounded-tl-xl bg-gray-100 w-36">
									Date de création
								</th>
								<th className="bg-gray-100 w-36">
									Date de validation
								</th>
								<th className="bg-gray-100 w-36">
									Nom de l'éval.
								</th>
								<th className="rounded-tr-xl bg-gray-100 w-full">
								</th>
							</tr>
						</thead>
						<tbody>
							{!isLoadingProject && !isErrorProject && evaluations !== undefined ? (
								numEvaluation > 0 ? evaluations.map((evaluation: Evaluation, index: number) => {
									const creation_date = new Date(evaluation.creation_date);
									const validation_date = new Date(evaluation.validation_date);
									return (
										<tr key={index} className={index < numEvaluation - 1 ? "border-b-2 border-gray-150" : ""}>
											<td className="p-2">
												{creation_date.toLocaleString('fr-FR', {
													day: '2-digit',
													month: 'short',
													year: 'numeric'
												})}
											</td>
											<td>
												{validation_date.toLocaleString('fr-FR', {
													day: '2-digit',
													month: 'short',
													year: 'numeric'
												})}
											</td>
											<td>
												{evaluation.name}
											</td>
										</tr>
									);
								}): (
									<tr>
										<td colSpan={4}>Aucune évaluation créé pour le moment</td>
									</tr>
							)) : (
								<tr>
									<td>
										<Skeleton className="w-3/4" />
									</td>
									<td>
										<Skeleton className="w-3/4" />
									</td>
									<td>
										<Skeleton className="w-3/4" />
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</section>
		</>
	)
}

export default Array;
