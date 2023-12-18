interface ItemSelectedProps {
  id: number;
  name: string;
  isChecked: boolean;
}

export default function ItemSelected({
  id,
  name,
  isChecked,
}: ItemSelectedProps) {
  const displayBorder = isChecked ? "border-gray-300" : "border-white";

  return (
    <div>
      <input
        className="hidden"
        type="radio"
        id={name}
        name="manager"
        value={id}
        defaultChecked={isChecked}
      />
      <label
        htmlFor={name}
        className={`p-2 border rounded-full ${displayBorder}`}
      >
        {name}
      </label>
    </div>
  );
}
