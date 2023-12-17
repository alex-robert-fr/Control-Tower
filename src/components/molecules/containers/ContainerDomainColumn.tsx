import useDomain from "../../../hooks/useDomain";
import useProject from "../../../hooks/useProject";
import { Domain } from "../../../schemas";
import { RoundedTag } from "../../atoms/Tags";
import ColumnTitleAndTag from "../ColumnTitleAndTag";

function ContainerDomainColumn() {
  const { data: projectData, isLoading: isProjectLoading } = useProject();
  const {
    data: domainData,
    isLoading: isDomainLoading,
    isError: isDomainError,
  } = useDomain();
  const domainObject = domainData?.find(
    (e: Domain) => e.id === projectData?.domain
  );

  const isLoading = isProjectLoading || isDomainLoading;

  return (
    <ColumnTitleAndTag
      title="Domaine"
      textTag={domainObject?.name}
      isError={isDomainError}
      isLoading={isLoading}
      TagComponent={RoundedTag}
    />
  );
}

export default ContainerDomainColumn;
