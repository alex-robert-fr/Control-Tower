import Section from "./Section";
import FormManager from "./form/FormManager";
import FormModel from "./form/FormModel";
import FormStatus from "./form/FormStatus";
import Description from "./Description";
import DomainAndProgram from "./DomainAndProgram";
import FormDates from "./form/FormDates";
import {Project} from "../App";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface InfoProps {
	data?: Project
	isLoading: boolean,
	isError: boolean
}

function Info({data, isLoading, isError}: InfoProps) {

	return (
		<>
			<h1 className="text-2xl uppercase font-bold text-left mx-6 pt-6">
				{!isLoading && data !== undefined ? `${data.name} (${data.reference})` : <Skeleton />}
			</h1>
			<section className="m-6 grid grid-cols-2 gap-4">
				<Section className="row-span-2" title="Informations">
					<div className="flex flex-col">
						<FormManager projectManagerId={data?.manager_id} />
						<FormStatus projectData={data} isLoading={isLoading} isError={isError} />
						<FormModel projectData={data} model_id={data?.risk_model_id} numEvaluation={data !== undefined ? data?.evaluation.length : 0} />
						<FormDates isLoadingProject={isLoading} isErrorProject={isError} start_date={data?.start_date} end_date={data?.end_date}/>
					</div>
				</Section>
				<Description isLoadingProject={isLoading} isErrorProject={isError} description={data?.description} />
				<DomainAndProgram idDomain={data?.domain} idProgram={data?.program} />
			</section>
		</>
	);
}

export default Info;
