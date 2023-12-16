import useChangeRiskModel from "../../../hooks/useChangeRiskModel";
import ModelLine from "../ModelLine";

export interface ContainerModelLineProps {
  idRiskModelProject?: number;
  isLoadingProject: boolean;
}

function ContainerModelLine({
  idRiskModelProject,
  isLoadingProject,
}: ContainerModelLineProps) {
  const updateModel = useChangeRiskModel();

  const updateModelInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateModel(parseInt(event.target.value));
  };

  return (
    <ModelLine
      idRiskModelProject={idRiskModelProject}
      isLoadingProject={isLoadingProject}
      updateModelInput={updateModelInput}
    />
  );
}

export default ContainerModelLine;
