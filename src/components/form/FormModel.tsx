import {z} from "zod";
import LineForm from "./LineForm";
import {useQuery} from "react-query";

const RiskModelSchema = z.object({
	id: z.number(),
	model_name: z.string()
});

type RiskModel = z.infer<typeof RiskModelSchema>;

function FormModel() {
	const fetchRiskModel = async () => {
		const res = await fetch("http://localhost:3000/risk_model");
		const data = await res.json();
		return (RiskModelSchema.array().parse(data));
	}
	const {data, isLoading, error} = useQuery<RiskModel[], Error>("model", fetchRiskModel);

	return (
		<LineForm name="Modèle de risque">
				{isLoading ? (
					<p>Chargement...</p>
				) : error ? (
					<p>Une erreur est survenue</p>
				) : (
					<select name="model">
					{data && data.length > 0 ? (
						data.map((model: RiskModel, index: number) => {
							return (
								<option value={model.id}>
									{model.model_name}
								</option>
							);
						})
					) : <option>Aucun modèle disponible</option>
					}
					</select>
				)}
		</LineForm>
	);
}

export default FormModel;
