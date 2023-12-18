import {FilledButton} from "../../atoms/Buttons";
import ContainerEvaluationsArray from "../../molecules/containers/ContainerEvaluationsArray";

function EvaluationsSection() {
  return (
		<>
			<p>Évaluations validées ✓</p>
			<FilledButton text="Nouvelle évaluation" onClick={() => {}} />
			<ContainerEvaluationsArray />
		</>
	);
}

export default EvaluationsSection;
