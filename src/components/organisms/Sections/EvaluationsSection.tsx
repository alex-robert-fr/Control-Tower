import ContainerEvaluationsArray from "../../../containers/ContainerEvaluationsArray";
import useAddEvaluation from "../../../hooks/useAddEvaluation";
import { Project } from "../../../schemas";
import {FilledButton} from "../../atoms/buttons";

interface EvaluationsSectionProps {
  projectData?: Project;
  isLoadingProject: boolean;
}

function EvaluationsSection({
  projectData,
  isLoadingProject,
}: EvaluationsSectionProps) {
  const updateEvaluations = useAddEvaluation();

  const updateEvaluationsArray = () => {
    updateEvaluations();
  };

  const isDisabledButton =
    projectData && !isLoadingProject ? projectData.risk_model_id === -1 : false;

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 mb-4">
        <p className="text-emerald-500 font-bold text-lg justify-self-start">
          Évaluations validées ✓
        </p>
        <FilledButton
          text="Nouvelle évaluation"
          onClick={updateEvaluationsArray}
          disabled={isDisabledButton}
					className="justify-self-end"
        />
      </div>
      <ContainerEvaluationsArray />
    </div>
  );
}

export default EvaluationsSection;
