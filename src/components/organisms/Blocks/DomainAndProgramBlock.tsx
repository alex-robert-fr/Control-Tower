import ContainerDomainColumn from "../../molecules/containers/ContainerDomainColumn";
import ContainerProgramColumn from "../../molecules/containers/ContainerProgramColumn";
import BlockTemplate from "./BlockTemplate";

function DomainAndProgramBlock() {
  return (
    <BlockTemplate title="Domaine et programme">
			<div className="grid max-sm:gap-4 sm:grid-cols-2">
				<ContainerDomainColumn />
				<ContainerProgramColumn />
			</div>
    </BlockTemplate>
  );
}

export default DomainAndProgramBlock;
