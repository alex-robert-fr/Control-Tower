import { useMutation, useQueryClient } from "@tanstack/react-query";
import useProject from "./useProject";
import { StatusEnum } from "@enums";
import { updateData } from "@services";

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
        updateData(newData);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project"] });
    },
  });

  return updateStatus.mutate;
}

export default useChangeStatus;
