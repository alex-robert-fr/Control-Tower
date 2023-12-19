import BlockTemplate from "./BlockTemplate";
import DateLine from "../../molecules/DateLine";
import ContainerStatusLine from "../../../containers/ContainerStatusLine";
import ContainerModelLine from "../../../containers/ContainerModelLine";
import {ContainerManagerLine} from "@containers";

interface InformationsBlockProps {
  className?: string;
}

function InformationsBlock({ className }: InformationsBlockProps) {
  return (
    <BlockTemplate className={`sm:grid ${className || ""}`} title="Informations">
			<ContainerManagerLine />
      <ContainerStatusLine />
      <ContainerModelLine />
      <DateLine />
    </BlockTemplate>
  );
}

export default InformationsBlock;
