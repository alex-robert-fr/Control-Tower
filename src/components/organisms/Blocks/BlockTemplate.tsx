interface BlockTemplateProps {
  title: string;
  children: React.ReactNode;
}

function BlockTemplate({ title, children }: BlockTemplateProps) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default BlockTemplate;
