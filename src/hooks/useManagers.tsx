import { useQuery } from "@tanstack/react-query";
import { Manager, ManagerSchema } from "../schemas";

function useManagers() {
  const fetchManager = async () => {
    const res = await fetch("http://localhost:3000/manager/");
    const data = await res.json();
    return ManagerSchema.array().parse(data);
  };
  const { data, isLoading, isError } = useQuery<Manager[], Error>({
    queryKey: ["manager"],
    queryFn: fetchManager,
  });

  return { data, isLoading, isError };
}

export default useManagers;
