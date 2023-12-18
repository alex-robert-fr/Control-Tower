export interface DefaultTagsProps {
  text: string;
  className?: string;
}

export function DefaultTags({ text, className = "" }: DefaultTagsProps) {
  return <p className={`inline text-xs py-1 px-2 ${className}`}>{text}</p>;
}
