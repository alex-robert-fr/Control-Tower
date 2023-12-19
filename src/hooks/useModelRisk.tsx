import { RiskModelSchema } from "@schema";
import { useFetchData } from "./useFetchData";

export default function useModelRisk() {
  return useFetchData("risk_model", RiskModelSchema, "model");
}
