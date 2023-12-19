import { DateLine } from "@molecules";
import BlockTemplate from "./BlockTemplate";
import {
  ContainerManagerLine,
  ContainerModelLine,
  ContainerStatusLine,
} from "@containers";

interface InformationsBlockProps {
  className?: string;
}

export default function InformationsBlock({
  className = "",
}: InformationsBlockProps) {
  return (
    <BlockTemplate className={`sm:grid ${className}`} title="Informations">
      <ContainerManagerLine />
      <ContainerStatusLine />
      <ContainerModelLine />
      <DateLine />
    </BlockTemplate>
  );
}
