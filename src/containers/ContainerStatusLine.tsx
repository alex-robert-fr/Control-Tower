import { useChangeStatus, useProject } from "@hooks";
import { StatusLine } from "@molecules";

export default function ContainerStatusLine() {
  const updateStatus = useChangeStatus();
  const { data, isLoading } = useProject();

  const updateStatusInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateStatus(event.target.value);
  };

  const dataIsAvailable = data !== undefined && !isLoading;

  return (
    <StatusLine
      projectStatus={data?.status}
      dataIsAvailable={dataIsAvailable}
      updateStatusInput={updateStatusInput}
    />
  );
}
