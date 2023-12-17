import {RectangularTag, RoundedTag} from "../../atoms/Tags";
import ColumnTitleAndTag from "../../molecules/ColumnTitleAndTag";
import ContainerDomainColumn from "../../molecules/containers/ContainerDomainColumn";
import ContainerProgramColumn from "../../molecules/containers/ContainerProgramColumn";
import BlockTemplate from "./BlockTemplate";

function DomainAndProgramBlock() {
  return (
    <BlockTemplate title="Domaine et programme">
			<ContainerDomainColumn />
			<ContainerProgramColumn />
    </BlockTemplate>
  );
}

export default DomainAndProgramBlock;
