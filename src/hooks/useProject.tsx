import { ProjectSchema } from "@schema";
import { useFetchData } from "./useFetchData";

export default function useProject() {
  return useFetchData("project_management/project/1", ProjectSchema, "project", false);
}
