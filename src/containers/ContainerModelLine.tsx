import { useModelRisk } from "@hooks";
import ModelLine from "../components/molecules/ModelLine";
import useChangeRiskModel from "../hooks/useChangeRiskModel";
import useProject from "../hooks/useProject";

export default function ContainerModelLine() {
  const updateModel = useChangeRiskModel();
  const { data: projectData, isLoading: isLoadingProject } = useProject();
  const {
    data: modelData,
    isLoading: isLoadingModel,
    isError: isErrorModel,
  } = useModelRisk();

  const dataIsAvailable =
    projectData !== undefined &&
    modelData !== undefined &&
    !isLoadingProject &&
    !isLoadingModel &&
    !isErrorModel;

  const updateModelInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateModel(parseInt(event.target.value));
  };

  const isDisabled = dataIsAvailable && projectData.evaluation.length > 0;

  return (
    <ModelLine
      updateModelInput={updateModelInput}
      dataIsAvailable={dataIsAvailable}
      idRiskModelProject={projectData?.risk_model_id}
      modelData={modelData}
      isDisabled={isDisabled}
    />
  );
}
