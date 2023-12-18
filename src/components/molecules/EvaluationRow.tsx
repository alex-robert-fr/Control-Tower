interface EvaluationRowProps {
  creationDate: string;
  validationDate: string;
  name: string;
}

function EvaluationRow({
  creationDate,
  validationDate,
  name,
}: EvaluationRowProps) {
  return (
    <tr>
      <td>{creationDate}</td>
      <td>{validationDate}</td>
      <td>{name}</td>
    </tr>
  );
}

export default EvaluationRow;
