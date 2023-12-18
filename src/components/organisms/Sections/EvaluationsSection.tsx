import useAddEvaluation from "../../../hooks/useAddEvaluation";
import { Project } from "../../../schemas";
import { FilledButton } from "../../atoms/Buttons";
import ContainerEvaluationsArray from "../../molecules/containers/ContainerEvaluationsArray";

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
    projectData && !isLoadingProject
      ? projectData.risk_model_id === -1
      : false;

  return (
    <>
      <p>Évaluations validées ✓</p>
      <FilledButton
        text="Nouvelle évaluation"
        onClick={updateEvaluationsArray}
        disabled={isDisabledButton}
      />
      <ContainerEvaluationsArray />
    </>
  );
}

export default EvaluationsSection;
