import Skeleton from "react-loading-skeleton";
import LineForm from "./LineForm";
import ItemSelected from "@atoms/ItemSelected";
import { Manager } from "@schema";

interface ManagerLineProps {
  dataIsAvailable: boolean;
  idProjectManager?: number;
  managersData?: Array<Manager>;
}

export default function ManagerLine({
  dataIsAvailable,
  idProjectManager = undefined,
  managersData = [],
}: ManagerLineProps) {
  const managerLineRenderer = () => {
    if (!dataIsAvailable) return <Skeleton containerClassName="flex-1" />;
    return (
      <div className="grid grid-cols-2 sm:w-1/2 max-w-xs">
        {managersData.map((manager: Manager) => (
          <ItemSelected
            key={manager.id}
            id={manager.id}
            name={`${manager.name} ${manager.lastname}`}
            isChecked={idProjectManager === manager.id}
          />
        ))}
      </div>
    );
  };

  return <LineForm name="Manager">{managerLineRenderer()}</LineForm>;
}
