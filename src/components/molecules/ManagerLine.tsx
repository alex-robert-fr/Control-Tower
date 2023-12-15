import Skeleton from "react-loading-skeleton";
import useManagers from "../../hooks/useManagers";
import ItemSelected from "../atoms/ItemSelected";
import LineForm from "./LineForm";

interface ManagerLineProps {
  id_project_manager: number;
}

function ManagerLine({ id_project_manager }: ManagerLineProps) {
  const { data, isLoading, isError } = useManagers();

  return (
    <LineForm name="Manager">
      {isLoading || isError ? (
        <Skeleton containerClassName="flex-1" />
      ) : (
        data &&
        data.map((manager, index) => (
          <ItemSelected
            key={index}
            id={manager.id}
            name={`${manager.name} ${manager.lastname}`}
            isChecked={id_project_manager === manager.id}
          />
        ))
      )}
    </LineForm>
  );
}

export default ManagerLine;
