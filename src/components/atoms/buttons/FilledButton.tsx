import DefaultButton, { DefaultButtonProps } from "./DefaultButton";

interface FilledButtonProps extends DefaultButtonProps {
  backgroundColor?: string;
}

export function FilledButton({
  backgroundColor = "bg-blue",
  className = "",
  ...props
}: FilledButtonProps) {
  const filledButtonClass = `text-white px-4 rounded-md ${backgroundColor}-500 hover:${backgroundColor}-600 active:${backgroundColor}-700 disabled:${backgroundColor}-200 ${className}`;

  return <DefaultButton {...props} className={filledButtonClass} />;
}
