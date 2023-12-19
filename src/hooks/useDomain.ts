import { DomainSchema } from "@schema";
import { useFetchData } from "./useFetchData";

export default function useDomain() {
  return useFetchData("domains", DomainSchema, "domains");
}
