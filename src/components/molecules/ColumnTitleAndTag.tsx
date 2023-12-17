import Skeleton from "react-loading-skeleton";
import { TagsProps } from "../atoms/Tags";

interface ColumnTitleAndTagProps {
  title: string;
  textTag?: string;
  isLoading: boolean;
  isError: boolean;
  TagComponent: React.ComponentType<TagsProps>;
}

function ColumnTitleAndTag({
  title,
  textTag,
  isLoading,
  isError,
  TagComponent,
}: ColumnTitleAndTagProps) {
  if (isError || isLoading || !textTag) {
    return (
      <div>
        <p>{title}</p>
        <Skeleton containerClassName="flex-1" />
      </div>
    );
  }

  return (
    <div>
      <p>{title}</p>
      <TagComponent text={textTag} />
    </div>
  );
}

export default ColumnTitleAndTag;
