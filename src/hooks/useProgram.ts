import { ProgramSchema } from "@schema";
import { useFetchData } from "./useFetchData";

export default function useProgram() {
  return useFetchData("programs", ProgramSchema, "programs");
}
