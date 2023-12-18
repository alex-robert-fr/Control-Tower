import useProject from "../../../hooks/useProject";
import BlockTemplate from "./BlockTemplate";
import ManagerLine from "../../molecules/ManagerLine";
import DateLine from "../../molecules/DateLine";
import ContainerStatusLine from "../../../containers/ContainerStatusLine";
import ContainerModelLine from "../../../containers/ContainerModelLine";

interface InformationsBlockProps {
  className?: string;
}

function InformationsBlock({ className }: InformationsBlockProps) {
  const { data, isLoading } = useProject();

  return (
    <BlockTemplate className={`sm:grid ${className || ""}`} title="Informations">
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
  );
}

export default InformationsBlock;
