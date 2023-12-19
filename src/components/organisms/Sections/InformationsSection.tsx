import Skeleton from "react-loading-skeleton";
import {
  DescriptionBlock,
  DomainAndProgramBlock,
  InformationsBlock,
} from "@organisms/Blocks";
import { useProject } from "@hooks";

export default function InformationsSection() {
  const { data, isLoading } = useProject();
  const dataIsAvailable = data !== undefined && !isLoading;

  const titleRenderer = () => {
    if (!dataIsAvailable) return <Skeleton />;
    return `${data?.name} (${data?.reference})`;
  };

  return (
    <div className="p-6">
      <h1 className="text-xl uppercase font-bold text-left mb-6 sm:text-2xl">
        {titleRenderer()}
      </h1>
      <section className="grid lg:grid-cols-2 gap-4 max-sm:justify-items-stretch">
        <InformationsBlock className="lg:row-span-2" />
        <DescriptionBlock />
        <DomainAndProgramBlock />
      </section>
    </div>
  );
}
