import { useMutation, useQueryClient } from "@tanstack/react-query";
import { StatusEnum } from "../enums";
import apiService from "../services/apiService";
import useProject from "./useProject";

function useChangeStatus() {
  const { data, isLoading } = useProject();
  const queryClient = useQueryClient();

  const updateStatus = useMutation({
    mutationFn: async (newStatus: string) => {
      let statusKey = newStatus;
      if (!statusKey) statusKey = StatusEnum.IN_PROGRESS;

      let newData = {};
      if (!isLoading && data) {
        newData = { ...data, status: statusKey };
      }
      apiService.updateData(newData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project"] });
    },
  });

  return updateStatus.mutate;
}

export default useChangeStatus;
