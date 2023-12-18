interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

function Button({ text, className = "", onClick, disabled = false }: ButtonProps) {
  return (
    <button
      className={`font-bold text-base py-1.5 ${className}`}
      onClick={onClick}
			disabled={disabled}
    >
      {text}
    </button>
  );
}

interface TextButtonProps extends ButtonProps {
  textColor?: string;
}

export function TextButton({
  text,
  textColor = "text-blue-600",
  onClick,
	disabled
}: TextButtonProps) {
  return <Button text={text} className={textColor} onClick={onClick} disabled={disabled} />;
}

interface FilledButtonProps extends ButtonProps {
  backgroundColor?: string;
}

export function FilledButton({
  text,
  backgroundColor = "bg-blue",
  onClick,
	disabled
}: FilledButtonProps) {
  return (
    <Button
      text={text}
      className={`text-white px-4 rounded-md ${backgroundColor}-500 hover:${backgroundColor}-600 active:${backgroundColor}-700 disabled:${backgroundColor}-200`}
      onClick={onClick}
			disabled={disabled}
    />
  );
}
