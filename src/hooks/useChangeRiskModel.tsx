import { useMutation, useQueryClient } from "@tanstack/react-query";
import useProject from "./useProject";
import { updateData } from "@services";

function useChangeRiskModel() {
  const { data, isLoading } = useProject();
  const queryClient = useQueryClient();

  const updateModel = useMutation({
    mutationFn: async (newModel: number) => {
      let newData = {};
      if (!isLoading && data) {
        newData = { ...data, risk_model_id: newModel };
      }
      updateData(newData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project"] });
    },
  });

  return updateModel.mutate;
}

export default useChangeRiskModel;
