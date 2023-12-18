import EvaluationsArray from "../components/molecules/EvaluationsArray";
import useProject from "../hooks/useProject";

function ContainerEvaluationsArray() {
  const { data, isLoading } = useProject();

  return (
    <EvaluationsArray
      evaluationsData={data?.evaluation}
      isLoadingProject={isLoading}
    />
  );
}

export default ContainerEvaluationsArray;
