import useProject from "../../../hooks/useProject";
import EvaluationsArray from "../EvaluationsArray";

function ContainerEvaluationsArray() {
  const { data, isLoading } = useProject();

  return (
    <>
      <p>ContainerArray</p>
      <EvaluationsArray
        evaluationsData={data?.evaluation}
        isLoadingProject={isLoading}
      />
    </>
  );
}

export default ContainerEvaluationsArray;