interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

function Button({ text, className, onClick }: ButtonProps) {
  return (
    <button
      className={`font-bold text-base ${className || ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

interface TextButtonProps extends ButtonProps {
  textColor?: string;
}

export function TextButton({ text, textColor, onClick }: TextButtonProps) {
  return <Button text={text} className={textColor} onClick={onClick} />;
}

TextButton.defaultProps = {
  textColor: "text-blue-600",
};

export function FilledButton() {
  return <button>Filled button</button>;
}
