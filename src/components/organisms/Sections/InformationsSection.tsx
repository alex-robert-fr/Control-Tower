import Skeleton from "react-loading-skeleton";
import useProject from "../../../hooks/useProject";
import InformationsBlock from "../Blocks/InformationsBlock";
import DescriptionBlock from "../Blocks/DescriptionBlock";
import DomainAndProgramBlock from "../Blocks/DomainAndProgramBlock";

function InformationsSection() {
  const { data, isLoading } = useProject();

  return (
    <>
      <h1>
        {data && !isLoading ? `${data.name} (${data.reference})` : <Skeleton />}
      </h1>
      <InformationsBlock />
			<DescriptionBlock />
			<DomainAndProgramBlock />
    </>
  );
}

export default InformationsSection;
