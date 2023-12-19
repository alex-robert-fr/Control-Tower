import DefaultButton, { DefaultButtonProps } from "./DefaultButton";

export function FilledButton({ className = "", ...props }: DefaultButtonProps) {
  return (
    <DefaultButton
      {...props}
      className={`transition text-white px-4 rounded-md bg-blue-500 hover:bg-blue-600 active:bg-blue-700 disabled:bg-blue-200 ${className}`}
    />
  );
}
