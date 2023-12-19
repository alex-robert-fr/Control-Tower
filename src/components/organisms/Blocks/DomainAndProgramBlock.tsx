import { ContainerDomainColumn, ContainerProgramColumn } from "@containers";
import BlockTemplate from "./BlockTemplate";

export default function DomainAndProgramBlock() {
  return (
    <BlockTemplate title="Domaine et programme">
      <div className="grid max-sm:gap-4 sm:grid-cols-2">
        <ContainerDomainColumn />
        <ContainerProgramColumn />
      </div>
    </BlockTemplate>
  );
}
