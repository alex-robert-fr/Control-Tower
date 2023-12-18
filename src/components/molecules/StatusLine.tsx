import Skeleton from "react-loading-skeleton";
import LineForm from "./LineForm";
import {ContainerStatusLineProps} from "../../containers/ContainerStatusLine";
import {StatusEnum} from "@enums";

interface StatusLineProps extends ContainerStatusLineProps {
  updateStatusInput: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function StatusLine({
  projectStatus,
  isLoadingProject,
  updateStatusInput,
}: StatusLineProps) {
  if (isLoadingProject || !projectStatus) {
    return (
      <LineForm name="Statut">
        <Skeleton containerClassName="flex-1" />
      </LineForm>
    );
  }

  return (
    <LineForm name="Statut">
      <select
        name="status"
        defaultValue={projectStatus}
        onChange={updateStatusInput}
      >
        {Object.values(StatusEnum).map((status_enum: string, index: number) => {
          return (
            <option key={index} value={status_enum}>
              {status_enum}
            </option>
          );
        })}
      </select>
    </LineForm>
  );
}

export default StatusLine;
