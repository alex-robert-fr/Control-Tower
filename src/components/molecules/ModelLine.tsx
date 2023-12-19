import Skeleton from "react-loading-skeleton";
import LineForm from "./LineForm";
import { RiskModel } from "@schema";

interface ModelLineProps {
  updateModelInput: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  dataIsAvailable: boolean;
  idRiskModelProject?: number;
  modelData?: Array<RiskModel>;
  isDisabled?: boolean;
}

export default function ModelLine({
  updateModelInput,
  dataIsAvailable,
  idRiskModelProject = undefined,
  modelData = [],
  isDisabled = false,
}: ModelLineProps) {
  const generationOptions = (modelData: Array<RiskModel>) => {
    return modelData.map((model: RiskModel) => (
      <option key={model.id} value={model.id}>
        {model.model_name}
      </option>
    ));
  };

  const modelLineRenderer = () => {
    if (!dataIsAvailable) return <Skeleton containerClassName="flex-1" />;
    return (
      <select
        name="model"
        defaultValue={idRiskModelProject}
        onChange={updateModelInput}
        disabled={isDisabled}
      >
        <option value={-1}>-- Choisissez un modèle de risque --</option>
        {generationOptions(modelData)}
      </select>
    );
  };

  return <LineForm name="Modèle de risque">{modelLineRenderer()}</LineForm>;
}
