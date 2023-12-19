import Skeleton from "react-loading-skeleton";

interface ParagraphProps {
  text?: string;
  isLoadingProject?: boolean;
  characterLimit?: number;
  showMore?: boolean;
  className?: string;
}

export default function Paragraph({
  text = "",
  isLoadingProject = false,
  characterLimit = 0,
  showMore = false,
  className = "",
}: ParagraphProps) {
  if (isLoadingProject || !text)
    return <Skeleton count={2} containerClassName="flex-1" />;

  const renderText = () => {
    if (characterLimit && !showMore)
      return `${text.substring(0, characterLimit)}...`;
    return text;
  };

  return <p className={className}>{renderText()}</p>;
}
