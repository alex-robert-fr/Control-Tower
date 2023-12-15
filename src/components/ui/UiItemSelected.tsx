interface UiItemSelectedProps {
  id: number;
  name: string;
  isChecked: boolean;
}

function UiItemSelected({ id, name, isChecked }: UiItemSelectedProps) {
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
        className={`p-2 border rounded-full ${
          isChecked ? "border-gray-300" : "border-white"
        }`}
      >
        {name}
      </label>
    </div>
  );
}

export default UiItemSelected;
