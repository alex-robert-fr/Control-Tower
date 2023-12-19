interface EvaluationRowProps {
  creationDate: string;
  validationDate: string;
  name: string;
  rowIndex: number;
  evaluationNumber: number;
}

export default function EvaluationRow({
  creationDate,
  validationDate,
  name,
  rowIndex,
  evaluationNumber,
}: EvaluationRowProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleString("fr-FR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const notLastRow = rowIndex < evaluationNumber - 1;

  return (
    <tr className={notLastRow ? "border-b-2 border-gr-150" : ""}>
      <td className="p-2">{formatDate(creationDate)}</td>
      <td>{formatDate(validationDate)}</td>
      <td>{name}</td>
    </tr>
  );
}
