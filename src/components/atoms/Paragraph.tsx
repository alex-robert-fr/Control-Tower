import Skeleton from "react-loading-skeleton";

interface ParagraphProps {
  text?: string;
  isLoadingProject?: boolean;
  characterLimit?: number;
  showMore?: boolean;
}

function Paragraph({
  text,
  isLoadingProject,
  characterLimit,
  showMore,
}: ParagraphProps) {
  if (isLoadingProject || !text)
    return <Skeleton count={2} containerClassName="flex-1" />;

  if (characterLimit && !showMore)
    return <p>{text.substring(0, characterLimit)}...</p>;

  return <p>{text}</p>;
}

export default Paragraph;
