import { ContainerDescription } from "@containers";
import BlockTemplate from "./BlockTemplate";

export default function DescriptionBlock() {
  return (
    <BlockTemplate title="Description du projet">
      <ContainerDescription />
    </BlockTemplate>
  );
}
