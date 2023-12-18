import StatusLine from "../components/molecules/StatusLine";
import useChangeStatus from "../hooks/useChangeStatus";

export interface ContainerStatusLineProps {
  projectStatus?: string;
  isLoadingProject: boolean;
}

function ContainerStatusLine({
  projectStatus,
  isLoadingProject,
}: ContainerStatusLineProps) {
  const updateStatus = useChangeStatus();

  const updateStatusInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateStatus(event.target.value);
  };

  return (
    <StatusLine
      projectStatus={projectStatus}
      isLoadingProject={isLoadingProject}
      updateStatusInput={updateStatusInput}
    />
  );
}

export default ContainerStatusLine;
