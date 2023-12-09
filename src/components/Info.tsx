import Section from "./Section";
import FormManager from "./form/FormManager";
import FormModel from "./form/FormModel";
import FormStatus from "./form/FormStatus";
import Description from "./Description";
import DomainAndProgram from "./DomainAndProgram";
import FormDates from "./form/FormDates";
import {Project, StatusEnum} from "../App";

interface InfoProps {
	data?: Project
}

function Info({data}: InfoProps) {

	const updateStatusAndModel = async (status: string, model: number | undefined) => {
		console.log(data);
		let updateData;
		if (model === undefined)
		{
			console.log(`Status: ${status} Model: ${data?.risk_model_id}`);
			const statusKey = Object.keys(StatusEnum).find(key => StatusEnum[key as keyof typeof StatusEnum] === status);
			updateData = {
				...data,
				status: StatusEnum[statusKey as keyof typeof StatusEnum]
			};
		} else {
			console.log(`Status: ${data?.status} Model: ${model}`);
			updateData = {
				...data,
				risk_model_id: model
			};
		}
		console.log(updateData)
		const res = await fetch("http://localhost:3000/project_management/project/1", {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(updateData),
		});
		const dataUpdated = await res.json();
		console.log(dataUpdated);
	};
	
	return (
		<>
			<h1 className="text-2xl uppercase font-bold text-left ml-6 pt-6">
				{data?.name} ({data?.reference})
			</h1>
			<section className="m-6 mb-0 grid grid-cols-2 gap-4">
				<Section className="row-span-2" title="Informations">
					<div className="flex flex-col">
						<FormManager manager_id={data?.manager_id} />
						<FormStatus status={data?.status} callApi={updateStatusAndModel}/>
						<FormModel model_id={data?.risk_model_id} callApi={updateStatusAndModel}/>
						<FormDates start_date={data?.start_date} end_date={data?.end_date}/>
					</div>
				</Section>
				<Description description={data?.description} />
				<DomainAndProgram />
				<p className="justify-self-start self-center text-emerald-500 font-bold text-lg">
					Évaluations validées ✓
				</p>
				<button className="col-start-2 justify-self-end bg-blue-500 text-white font-bold px-4 py-1.5 rounded-md my-2">Nouvelle évaluation</button>
			</section>
		</>
	);
}

export default Info;
