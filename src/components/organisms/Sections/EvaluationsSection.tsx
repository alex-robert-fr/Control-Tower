import { FilledButton } from "@atoms/buttons";
import { ContainerEvaluationsArray } from "@containers";
import { useAddEvaluation, useProject } from "@hooks";

export default function EvaluationsSection() {
  const { data, isLoading } = useProject();
  const updateEvaluations = useAddEvaluation();

  const updateEvaluationsArray = () => {
    updateEvaluations();
  };

  const isDisabledButton = data?.risk_model_id === -1 || isLoading;

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
