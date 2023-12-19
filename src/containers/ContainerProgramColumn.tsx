import { RectangularTag } from "@atoms/tags";
import {Program} from "@schema";
import {ColumnTitleAndTag} from "@molecules";
import {useProgram, useProject} from "@hooks";

function ContainerProgramColumn() {
  const { data: projectData, isLoading: isProjectLoading } = useProject();
  const { data: programData, isLoading: isProgramLoading } = useProgram();

  const dataIsAvailable =
    !isProjectLoading &&
    !isProgramLoading &&
    projectData !== undefined &&
    programData !== undefined;

  const getProgramObject = programData?.find(
    (e: Program) => e.id === projectData?.program
  );

  return (
    <ColumnTitleAndTag
      title="Programme"
      dataIsAvailable={dataIsAvailable}
      TagComponent={RectangularTag}
      textTag={getProgramObject?.name}
    />
  );
}

export default ContainerProgramColumn;
