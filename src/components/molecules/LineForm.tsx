interface LineFormProps {
  name: string;
  children: React.ReactNode;
}

export default function LineForm({ name, children }: LineFormProps) {
  return (
    <div className="sm:flex my-6">
      <p className="w-44 text-base text-gray-400 font-semibold max-sm:mb-2">
        {name}
      </p>
      {children}
    </div>
  );
}
