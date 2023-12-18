import useProgram from "../../../hooks/useProgram";
import useProject from "../../../hooks/useProject";
import { Program } from "../../../schemas";
import { RectangularTag } from "../../atoms/Tags";
import ColumnTitleAndTag from "../ColumnTitleAndTag";

function ContainerProgramColumn() {
  const { data: projectData, isLoading: isProjectLoading } = useProject();
  const {
    data: programData,
    isLoading: isProgramLoading,
    isError: isProgramError,
  } = useProgram();

  const programObject = programData?.find(
    (e: Program) => e.id === projectData?.program
  );
  const isLoading = isProjectLoading || isProgramLoading;

  return (
    <ColumnTitleAndTag
      title="Programme"
      textTag={programObject?.name}
      isLoading={isLoading}
      isError={isProgramError}
      TagComponent={RectangularTag}
    />
  );
}

export default ContainerProgramColumn;