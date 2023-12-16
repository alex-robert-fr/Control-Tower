import Skeleton from "react-loading-skeleton";
import useManagers from "../../hooks/useManagers";
import ItemSelected from "../atoms/ItemSelected";
import LineForm from "./LineForm";
import { Manager } from "../../schemas";

interface ManagerLineProps {
  idProjectManager?: number;
  isProjectLoading: boolean;
}

function ManagerLine({ idProjectManager, isProjectLoading }: ManagerLineProps) {
  const { data, isLoading, isError } = useManagers();

  if (
    idProjectManager === undefined ||
    isProjectLoading ||
    isLoading ||
    isError ||
    !data
  ) {
    return (
      <LineForm name="Manager">
        <Skeleton containerClassName="flex-1" />
      </LineForm>
    );
  }

  return (
    <LineForm name="Manager">
      {data.map((manager: Manager) => (
        <ItemSelected
          key={manager.id}
          id={manager.id}
          name={`${manager.name} ${manager.lastname}`}
          isChecked={idProjectManager === manager.id}
        />
      ))}
    </LineForm>
  );
}

export default ManagerLine;
