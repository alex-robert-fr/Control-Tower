interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

function Button({ text, className = "", onClick }: ButtonProps) {
  return (
    <button
      className={`font-bold text-base py-1.5 ${className}`}
      onClick={onClick}
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
}: TextButtonProps) {
  return <Button text={text} className={textColor} onClick={onClick} />;
}

interface FilledButtonProps extends ButtonProps {
  backgroundColor?: string;
}

export function FilledButton({
  text,
  backgroundColor = "bg-blue",
  onClick,
}: FilledButtonProps) {
  return <Button text={text} className={`text-white px-4 rounded-md ${backgroundColor}-500 hover:${backgroundColor}-600 active:${backgroundColor}-700 disabled:${backgroundColor}-200`} onClick={onClick} />;
}
