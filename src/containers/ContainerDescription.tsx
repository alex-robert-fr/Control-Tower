import { useState } from "react";
import useProject from "../hooks/useProject";
import Paragraph from "../components/atoms/Paragraph";
import {TextButton} from "../components/atoms/buttons";

function ContainerDescription() {
  const { data, isLoading } = useProject();
  const [showMore, setShowMore] = useState(false);
  const [textInButton, setTextInButton] = useState("Voir Plus");

  const click = () => {
    if (!showMore === true) setTextInButton("Voir Moins");
    else setTextInButton("Voir Plus");
    setShowMore(!showMore);
  };

  return (
    <>
      <Paragraph
        text={data?.description}
        isLoadingProject={isLoading}
        characterLimit={100}
        showMore={showMore}
				className="mb-3"
      />
      <TextButton text={textInButton} onClick={click} />
    </>
  );
}

export default ContainerDescription;
