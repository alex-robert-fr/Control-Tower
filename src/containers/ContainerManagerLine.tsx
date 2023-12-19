import { useManagers, useProject } from "@hooks";
import { ManagerLine } from "@molecules";

export default function ContainerMangerLine() {
  const { data: projectData, isLoading: isLoadingProject } = useProject();
  const {
    data: managerData,
    isLoading: isLoadingManager,
    isError: isErrorManager,
  } = useManagers();

  const dataIsAvailable =
    projectData !== undefined &&
    managerData !== undefined &&
    !isLoadingProject &&
    !isLoadingManager &&
    !isErrorManager;
  return (
    <ManagerLine
      dataIsAvailable={dataIsAvailable}
      idProjectManager={projectData?.manager_id}
      managersData={managerData}
    />
  );
}
