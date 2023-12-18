import {RoundedTag} from "@atoms";
import ColumnTitleAndTag from "../components/molecules/ColumnTitleAndTag";
import useDomain from "../hooks/useDomain";
import useProject from "../hooks/useProject";
import {Domain} from "../schemas";

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
