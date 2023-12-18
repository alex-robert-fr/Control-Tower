import Skeleton from "react-loading-skeleton";

interface ParagraphProps {
  text?: string;
  isLoadingProject?: boolean;
  characterLimit?: number;
  showMore?: boolean;
  className?: string;
}

function Paragraph({
  text,
  isLoadingProject,
  characterLimit,
  showMore,
  className,
}: ParagraphProps) {
  if (isLoadingProject || !text)
    return <Skeleton count={2} containerClassName="flex-1" />;

  if (characterLimit && !showMore)
    return (
      <p className={className || ""}>{text.substring(0, characterLimit)}...</p>
    );

  return <p>{text}</p>;
}

export default Paragraph;
