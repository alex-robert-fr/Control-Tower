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
    if (evaluationsData.length < 1)
      return (
        <tr>
          <td colSpan={4}>Aucune évaluation créé pour le moment</td>
        </tr>
      );
    return (
      <tbody>
        {evaluationsData.map((evaluation: Evaluation, index: number) => {
          return (
            <EvaluationRow
              key={evaluation.id}
              creationDate={evaluation.creation_date}
              validationDate={evaluation.validation_date}
              name={evaluation.name}
							rowIndex={index}
							evaluationNumber={evaluationsData.length}
            />
          );
        })}
      </tbody>
    );
  };

  return (
    <div className="border border-2 border-gray-150 rounded-xl">
      <table className="table-fixed w-full">
        <thead>
          <tr className="text-sm text-gray-500 border-b">
            <th className="bg-gray-100 w-36 p-2 rounded-tl-xl">
              Date de création
            </th>
            <th className="bg-gray-100 w-36">Date de validation</th>
            <th className="bg-gray-100 w-36">Nom de l'éval</th>
            <th className="bg-gray-100 w-full rounded-tr-xl"></th>
          </tr>
        </thead>
        {generateRows()}
      </table>
    </div>
  );
}

export default EvaluationsArray;
