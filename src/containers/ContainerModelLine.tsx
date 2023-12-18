import ModelLine from "../components/molecules/ModelLine";
import useChangeRiskModel from "../hooks/useChangeRiskModel";
import useProject from "../hooks/useProject";

export interface ContainerModelLineProps {
  idRiskModelProject?: number;
  isLoadingProject: boolean;
}

function ContainerModelLine({
  idRiskModelProject,
  isLoadingProject,
}: ContainerModelLineProps) {
  const updateModel = useChangeRiskModel();
  const { data, isLoading } = useProject();

  const updateModelInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateModel(parseInt(event.target.value));
  };

  const isDisabled = data && !isLoading && data.evaluation.length > 0;

  return (
    <ModelLine
      idRiskModelProject={idRiskModelProject}
      isLoadingProject={isLoadingProject}
      updateModelInput={updateModelInput}
      isDisabled={isDisabled}
    />
  );
}

export default ContainerModelLine;
