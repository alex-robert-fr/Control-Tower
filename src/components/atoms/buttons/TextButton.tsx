import DefaultButton, {DefaultButtonProps} from "./DefaultButton";

interface TextButtonProps extends DefaultButtonProps {
  textColor?: string;
}

export function TextButton({
  textColor = "text-blue-600",
  ...props
}: TextButtonProps) {
  return <DefaultButton {...props} className={textColor} />;
}
