import Skeleton from "react-loading-skeleton";
import InformationsBlock from "../Blocks/InformationsBlock";
import DescriptionBlock from "../Blocks/DescriptionBlock";
import DomainAndProgramBlock from "../Blocks/DomainAndProgramBlock";
import { Project } from "../../../schemas";

interface InformationsSectionProps {
  projectData?: Project;
  isLoadingProject: boolean;
}

function InformationsSection({
  projectData,
  isLoadingProject,
}: InformationsSectionProps) {
  return (
    <div className="p-6">
      <h1 className="text-xl uppercase font-bold text-left mb-6 sm:text-2xl">
        {projectData && !isLoadingProject ? (
          `${projectData.name} (${projectData.reference})`
        ) : (
          <Skeleton />
        )}
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
