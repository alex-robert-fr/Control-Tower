import Section from "./Section";

function DomainAndProgram() {
	return (
		<Section title="Domaine et programme">
			<table className="w-3/4">
				<thead className="text-gray-500">
					<tr>
						<th>
							Domaine
						</th>
						<th>
							Programme
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="py-2">
							<p className="inline uppercase text-xs border border-gray-400 py-1 px-2 rounded-full">
								Fonction commerciale
							</p>
						</td>
						<td>
							<p className="inline text-xs border border-gray-300 p-1.5 rounded">
								Microsoft
							</p>
						</td>
					</tr>
				</tbody>
			</table>
		</Section>
	);
}

export default DomainAndProgram;
