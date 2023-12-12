import {useQuery} from "@tanstack/react-query";
import {Domain, DomainSchema, ProgramSchema} from "../App";
import Section from "./Section";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface DomainAndProgramProps {
	idDomain?: number,
	idProgram?: number | null
}

function DomainAndProgram({idDomain, idProgram} : DomainAndProgramProps) {
	
	const fetchDomains = async () => {
		const res = await fetch("http://localhost:3000/domains");
		const data = await res.json();
		return (DomainSchema.array().parse(data));
	};	
	const fetchPrograms = async () => {
		const res = await fetch("http://localhost:3000/programs");
		const data = await res.json();
		return (ProgramSchema.array().parse(data));
	};
	const {data: dataDomain, isLoading: isLoadingDomain, isError: isErrorDomain} = useQuery<Domain[], Error>({
		queryKey: ["domains"],
		queryFn: fetchDomains
	});
	const {data: dataProgram, isLoading: isLoadingProgram, isError: isErrorProgram} = useQuery<Domain[], Error>({
		queryKey: ["programs"],
		queryFn: fetchPrograms
	});

	let nameDomain, nameProgram;
	if (!isLoadingDomain && dataDomain !== undefined)
		nameDomain = dataDomain.find(obj => obj.id === idDomain);
	if (!isLoadingProgram && dataProgram !== undefined && idProgram !== null)
		nameProgram = dataProgram.find(obj => obj.id === idProgram);

	return (
		<Section className="max-sm:max-w-md max-sm:w-full" title="Domaine et programme">
			<table className="max-sm:w-full sm:w-3/4">
				<thead className="text-gray-500">
					<tr>
						<th>
							Domaine
						</th>
						{idProgram !== null ? (
							<th>
								Programme
							</th>
						) : ('')}
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="py-2">
							{!isLoadingDomain && !isErrorDomain && nameDomain !== undefined ? (
								<p className="inline uppercase text-xs border border-gray-400 py-1 px-2 rounded-full">
									{nameDomain.name}
								</p>
							) : (
								<Skeleton className="w-3/4" />
							)}
						</td>
						<td>
							{isLoadingProgram || isErrorProgram ? (
								<Skeleton className="w-3/4" />
							) : idProgram !== null ? (
								<p className="inline text-xs border border-gray-300 p-1.5 rounded">
									{nameProgram?.name}
								</p>
							) : ('')}
						</td>
					</tr>
				</tbody>
			</table>
		</Section>
	);
}

export default DomainAndProgram;
