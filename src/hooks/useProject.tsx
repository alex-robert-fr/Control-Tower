import { useQuery } from "@tanstack/react-query";
import { Project, ProjectSchema } from "../schemas";

function useProject() {
  const fetchProject = async () => {
    const res = await fetch(
      "http://localhost:3000/project_management/project/1"
    );
    const data = await res.json();
    return ProjectSchema.parse(data);
  };
  const { data, isLoading, isError } = useQuery<Project, Error>({
    queryKey: ["project"],
    queryFn: fetchProject,
  });

  return { data, isLoading, isError };
}

export default useProject;
