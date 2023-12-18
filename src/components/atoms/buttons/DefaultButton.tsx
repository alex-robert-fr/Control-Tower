export interface DefaultButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export default function DefaultButton({
  text,
  onClick,
  className = "",
  disabled = false,
}: DefaultButtonProps) {
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
