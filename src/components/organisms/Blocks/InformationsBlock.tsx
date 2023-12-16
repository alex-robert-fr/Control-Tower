import Skeleton from "react-loading-skeleton";
import useProject from "../../../hooks/useProject";
import BlockTemplate from "./BlockTemplate";
import ManagerLine from "../../molecules/ManagerLine";
import DateLine from "../../molecules/DateLine";
import ContainerStatusLine from "../../molecules/containers/ContainerStatusLine";
import ContainerModelLine from "../../molecules/containers/ContainerModelLine";

function InformationsBlock() {
  const { data, isLoading } = useProject();

  return (
    <>
      <h1>{data ? `${data.name} (${data.reference})` : <Skeleton />}</h1>
      <section>
        <BlockTemplate title="Informations">
          <ManagerLine
            idProjectManager={data?.manager_id}
            isProjectLoading={isLoading}
          />
          <ContainerStatusLine
            projectStatus={data?.status}
            isLoadingProject={isLoading}
          />
          <ContainerModelLine
            idRiskModelProject={data?.risk_model_id}
            isLoadingProject={isLoading}
          />
          <DateLine />
        </BlockTemplate>
      </section>
    </>
  );
}

export default InformationsBlock;
