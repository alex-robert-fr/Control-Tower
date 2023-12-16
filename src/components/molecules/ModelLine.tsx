import Skeleton from "react-loading-skeleton";
import LineForm from "./LineForm";
import useModelRisk from "../../hooks/useModelRisk";
import { RiskModel } from "../../App";

interface ModelLineProps {
  idRiskModelProject?: number;
  isLoadingProject: boolean;
}

function ModelLine({ idRiskModelProject, isLoadingProject }: ModelLineProps) {
  const { data, isLoading, isError } = useModelRisk();

  const showSkeleton =
    idRiskModelProject === undefined ||
    !data ||
    isLoadingProject ||
    isLoading ||
    isError;

  if (showSkeleton) {
    return (
      <LineForm name="Modèle de risque">
        <Skeleton containerClassName="flex-1" />
      </LineForm>
    );
  }

  return (
    <LineForm name="Modèle de risque">
      <select name="model" defaultValue={idRiskModelProject}>
        <option value={-1}>-- Choisissez un modèle de risque --</option>
        {data.map((model: RiskModel) => {
          return (
            <option key={model.id} value={model.id}>
              {model.model_name}
            </option>
          );
        })}
      </select>
    </LineForm>
  );
}

export default ModelLine;
