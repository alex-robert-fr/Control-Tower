import Skeleton from "react-loading-skeleton";
import useProject from "../../../hooks/useProject";
import InformationsBlock from "../Blocks/InformationsBlock";
import DescriptionBlock from "../Blocks/DescriptionBlock";
import DomainAndProgramBlock from "../Blocks/DomainAndProgramBlock";

function InformationsSection() {
  const { data, isLoading } = useProject();

  return (
    <div className="p-6">
      <h1 className="text-xl uppercase font-bold text-left mb-6 sm:text-2xl">
        {data && !isLoading ? `${data.name} (${data.reference})` : <Skeleton />}
      </h1>
			<section className="grid lg:grid-cols-2 gap-4 max-sm:justify-items-stretch">
				<InformationsBlock className="lg:row-span-2" />
				<DescriptionBlock />
				<DomainAndProgramBlock />
			</section>
    </div>
  );
}

export default InformationsSection;
