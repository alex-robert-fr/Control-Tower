import { useProject } from "@hooks";
import { EvaluationsArray } from "@molecules";

export default function ContainerEvaluationsArray() {
  const { data, isLoading } = useProject();

  const dataIsAvailable = data !== undefined && !isLoading;

  return (
    <EvaluationsArray
      evaluationsData={data?.evaluation}
      dataIsAvailable={dataIsAvailable}
    />
  );
}
