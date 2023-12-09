import {Evaluation} from "../App";

interface ArrayProps {
	evaluations?: Array<Evaluation>
}

function Array({evaluations}: ArrayProps) {

	return (
		<section className="mx-6 my-3 border-2 border-gray-150 rounded-xl">
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
						{evaluations && evaluations?.map((evaluation: Evaluation, index: number) => {
							const creation_date = new Date(evaluation.creation_date);
							const validation_date = new Date(evaluation.validation_date);
							return (
								<tr key={index} className="border-b-2 border-gray-150">
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
						})}
					</tbody>
				</table>
			</section>
	)
}

export default Array;
