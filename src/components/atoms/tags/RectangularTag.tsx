import { DefaultTags, DefaultTagsProps } from "./DefaultTags";

export function RectangularTag({ text }: DefaultTagsProps) {
  return <DefaultTags text={text} className="border border-gray-300 rounded" />;
}
