import { ManagerSchema } from "@schema";
import { useFetchData } from "./useFetchData";

export default function useManagers() {
  return useFetchData("manager", ManagerSchema, "manager");
}
