import { useQuery } from "@tanstack/react-query";
import { Program, ProgramSchema } from "../schemas";

export default function useProgram() {
  const fetchPrograms = async () => {
    const res = await fetch("http://localhost:3000/programs");
    const data = await res.json();
    return ProgramSchema.array().parse(data);
  };
  const { data, isLoading, isError } = useQuery<Program[]>({
    queryKey: ["programs"],
    queryFn: fetchPrograms,
  });

  return { data, isLoading, isError };
}
