import Skeleton from "react-loading-skeleton";
import { Evaluation } from "../../schemas";
import EvaluationRow from "./EvaluationRow";

interface EvaluationsArrayProps {
  evaluationsData?: Array<Evaluation>;
  isLoadingProject: boolean;
}

function EvaluationsArray({
  evaluationsData,
  isLoadingProject,
}: EvaluationsArrayProps) {
  if (!isLoadingProject) console.log(evaluationsData);

  if (isLoadingProject || !evaluationsData) return <Skeleton height={30} />;

  const generateRows = () => {
    return (
      <tbody>
        {evaluationsData.map((evaluation: Evaluation) => {
          return (
            <EvaluationRow
              key={evaluation.id}
              creationDate={evaluation.creation_date}
              validationDate={evaluation.validation_date}
              name={evaluation.name}
            />
          );
        })}
      </tbody>
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Date de création</th>
          <th>Date de validation</th>
          <th>Nom de l'éval</th>
        </tr>
      </thead>
      {generateRows()}
    </table>
  );
}

export default EvaluationsArray;
