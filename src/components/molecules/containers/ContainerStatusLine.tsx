import useStatus from "../../../hooks/useStatus";
import StatusLine from "../StatusLine";

export interface ContainerStatusLineProps {
  projectStatus?: string;
  isProjectLoading: boolean;
}

function ContainerStatusLine({
  projectStatus,
  isProjectLoading,
}: ContainerStatusLineProps) {
  const updateStatus = useStatus();

  const updateStatusInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateStatus(event.target.value);
  };

  return (
    <StatusLine
      projectStatus={projectStatus}
      isProjectLoading={isProjectLoading}
      updateStatusInput={updateStatusInput}
    />
  );
}

export default ContainerStatusLine;
