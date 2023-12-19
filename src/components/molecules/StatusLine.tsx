import Skeleton from "react-loading-skeleton";
import LineForm from "./LineForm";
import { StatusEnum } from "@enums";

interface StatusLineProps {
  dataIsAvailable: boolean;
  updateStatusInput: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  projectStatus?: string;
}

function StatusLine({
  dataIsAvailable,
  updateStatusInput,
  projectStatus = "",
}: StatusLineProps) {
  const generationOptions = () => {
    return Object.values(StatusEnum).map(
      (statusEnum: string, index: number) => (
        <option key={index} value={statusEnum}>
          {statusEnum}
        </option>
      )
    );
  };

  const statusLineRenderer = () => {
    if (!dataIsAvailable) return <Skeleton containerClassName="flex-1" />;
    return (
      <select
        name="status"
        defaultValue={projectStatus}
        onChange={updateStatusInput}
      >
        {generationOptions()}
      </select>
    );
  };

  return <LineForm name="Statut">{statusLineRenderer()}</LineForm>;
}

export default StatusLine;
