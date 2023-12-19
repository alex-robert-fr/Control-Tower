import { DefaultTagsProps } from "@atoms/tags";
import Skeleton from "react-loading-skeleton";

interface ColumnTitleAndTagProps {
  title: string;
  dataIsAvailable: boolean;
  TagComponent: React.ComponentType<DefaultTagsProps>;
  textTag?: string;
}

export default function ColumnTitleAndTag({
  title,
  dataIsAvailable,
  TagComponent,
  textTag = "",
}: ColumnTitleAndTagProps) {
  const columnTitleAndTagRenderer = () => {
    if (!dataIsAvailable)
      return <Skeleton containerClassName="flex-1" width="75%" />;
    return <TagComponent text={textTag} />;
  };

  return (
    <div>
      <p className="font-bold text-gray-500 pb-2">{title}</p>
      {columnTitleAndTagRenderer()}
    </div>
  );
}
