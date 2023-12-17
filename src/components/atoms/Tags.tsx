export interface TagsProps {
  text: string;
  className?: string;
}

export function Tags({ text, className }: TagsProps) {
  return (
    <p className={`inline text-xs py-1 px-2 ${className || ""}`}>{text}</p>
  );
}



export function RoundedTag({ text }: TagsProps) {
  return (
    <Tags
      text={text}
      className="uppercase border border-gray-400 rounded-full"
    />
  );
}

export function RectangularTag({ text }: TagsProps) {
  return (
    <Tags
      text={text}
      className="border border-gray-300 rounded"
    />
  );
}
