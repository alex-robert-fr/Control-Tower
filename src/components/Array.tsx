function Array() {
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
						<tr className="border-b-2 border-gray-150">
							<td className="p-2">
								29 nov. 2023
							</td>
							<td>
								30 nov. 2023
							</td>
							<td>
								Copil Nov.
							</td>
						</tr>
						<tr>
							<td className="p-2">
								03 sept. 2023
							</td>
							<td>
								05 sept. 2023
							</td>
							<td>
								Copil Sept.
							</td>
						</tr>
					</tbody>
				</table>
			</section>
	)
}

export default Array;
