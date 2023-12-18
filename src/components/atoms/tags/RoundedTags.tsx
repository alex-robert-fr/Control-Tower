import { DefaultTags, DefaultTagsProps } from "./DefaultTags";

export function RoundedTag({ text }: DefaultTagsProps) {
  return (
    <DefaultTags
      text={text}
      className="uppercase border border-gray-400 rounded-full"
    />
  );
}
