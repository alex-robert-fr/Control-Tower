import Skeleton from "react-loading-skeleton";
import { StatusEnum } from "../../enums";
import LineForm from "./LineForm";

interface StatusLineProps {
  projectStatus?: string;
  isProjectLoading: boolean;
}

function StatusLine({ projectStatus, isProjectLoading }: StatusLineProps) {
	if (isProjectLoading || !projectStatus) {
		return (
			<LineForm name="Statut">
				<Skeleton containerClassName="flex-1" />
			</LineForm>
		)
	}
	
  return (
    <LineForm name="Statut">
      <select name="status" value={projectStatus}>
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
