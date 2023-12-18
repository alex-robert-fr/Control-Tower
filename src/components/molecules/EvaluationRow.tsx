interface EvaluationRowProps {
  creationDate: string;
  validationDate: string;
  name: string;
  rowIndex: number;
  evaluationNumber: number;
}

function EvaluationRow({
  creationDate,
  validationDate,
  name,
  rowIndex,
  evaluationNumber,
}: EvaluationRowProps) {
  const notLastRow = rowIndex < evaluationNumber - 1;
  const creationDateFormat = new Date(creationDate).toLocaleString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const validationDateFormat = new Date(validationDate).toLocaleString(
    "fr-FR",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );

  return (
    <tr className={notLastRow ? "border-b-2 border-gr-150" : ""}>
      <td className="p-2">{creationDateFormat}</td>
      <td>{validationDateFormat}</td>
      <td>{name}</td>
    </tr>
  );
}

export default EvaluationRow;
