import { RoundedTag } from "@atoms/tags";
import { useDomain, useProject } from "@hooks";
import { ColumnTitleAndTag } from "@molecules";
import { Domain } from "@schema";

export default function ContainerDomainColumn() {
  const { data: projectData, isLoading: isLoadingProject } = useProject();
  const {
    data: domainData,
    isLoading: isLoadingDomain,
    isError: isErrorDomain,
  } = useDomain();

  const domainObject = domainData?.find(
    (e: Domain) => e.id === projectData?.domain
  );

  const dataIsAvailable =
    projectData !== undefined &&
    domainData !== undefined &&
    !isLoadingProject &&
    !isLoadingDomain &&
    !isErrorDomain;

  return (
    <ColumnTitleAndTag
      title="Domaine"
      dataIsAvailable={dataIsAvailable}
      TagComponent={RoundedTag}
      textTag={domainObject?.name}
    />
  );
}
