import {useEffect, useState} from "react";
import {Evaluation, Project} from "../App";

interface ArrayProps {
	data?: Project,
	isLoading: boolean
}

function Array({data, isLoading}: ArrayProps) {
 	const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
	useEffect(() => {
		if (data?.evaluation) {
				setEvaluations(data.evaluation);
		}
	}, [data]);

	const formatDate = (timestamp: number) => {
		const date = new Date(timestamp);
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const day = date.getDate().toString().padStart(2, '0');

		return (`${year}-${month}-${day}`);
	};

	const updateArray = async () => {
		let nowDate = Date.now();
		let newId;
		console.log(evaluations)
		if (evaluations.length > 0)
			newId = evaluations?.reduce((acc, obj) => obj.id > acc ? obj.id : acc, evaluations[0].id);
		if (newId === undefined || evaluations === undefined)
			newId = 0;
		let newEvaluation = {
			id: newId + 1,
			name: "new test evaluation",
			creation_date: formatDate(nowDate),
			validation_date: formatDate(nowDate),
			status: "validated"
		};
		setEvaluations([...evaluations, newEvaluation]);
		data?.evaluation.push(newEvaluation);

		const res = await fetch("http://localhost:3000/project_management/project/1", {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data),
		});
	};

	return (
		<>
			<section className="grid grid-cols-2 mx-6" >
				<p className="justify-self-start self-center text-emerald-500 font-bold text-lg">
					Évaluations validées ✓
				</p>
				<button className="col-start-2 justify-self-end bg-blue-500 text-white font-bold px-4 py-1.5 rounded-md my-2 hover:bg-blue-600 active:bg-blue-700" onClick={updateArray}>Nouvelle évaluation</button>
			</section>
				<section className="mx-6 my-2 border-2 border-gray-150 rounded-xl">
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
							{evaluations.length > 0 ? evaluations?.map((evaluation: Evaluation, index: number) => {
								const creation_date = new Date(evaluation.creation_date);
								const validation_date = new Date(evaluation.validation_date);
								return (
									<tr key={index} className={index < evaluations.length - 1 ? "border-b-2 border-gray-150" : ""}>
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
							}) : isLoading ? (
								<td colSpan={4}>Chargement...</td>
							) : (
								<tr>
									<td colSpan={4}>Aucune données trouvées</td>

								</tr>
							)}
						</tbody>
					</table>
				</section>
		</>
	)
}

export default Array;
