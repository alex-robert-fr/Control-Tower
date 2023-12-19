interface BlockTemplateProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function BlockTemplate({
  title,
  children,
  className = "",
}: BlockTemplateProps) {
  return (
    <div className={`border rounded-xl text-left p-6 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-700 mb-5">{title}</h2>
      {children}
    </div>
  );
}

