import useProject from "./useProject";
import { EvaluationEnum } from "../enums";
import { formatDate, getNowDateString } from "../utils/utilsDate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Evaluation, Project } from "../schemas";
import apiService from "../services/apiService";

function generateNewEvaluation(
  projectData: Project,
  evaluations: Array<Evaluation>
) {
  const getNextId = () => {
    return evaluations.length > 0
      ? evaluations.reduce(
          (acc, obj) => (obj.id > acc ? obj.id : acc),
          evaluations[0].id
        ) + 1
      : 0;
  };

  const newEvaluation = {
    id: getNextId(),
    name: "new test evaluation",
    creation_date: getNowDateString(),
    validation_date: getNowDateString(),
    status: EvaluationEnum.VALIDATED,
  };

  const updateData = {
    ...projectData,
    evaluation: [...projectData.evaluation, newEvaluation],
  };

  return updateData;
}

function useAddEvaluation() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useProject();

  const updateEvaluations = useMutation({
    mutationFn: async () => {
      let newData;
      if (data && !isLoading) {
        newData = generateNewEvaluation(data, data.evaluation);
        apiService.updateData(newData);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project"] });
    },
  });

  return updateEvaluations.mutate;
}

export default useAddEvaluation;
