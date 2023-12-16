import { useQuery } from "@tanstack/react-query";
import { RiskModel, RiskModelSchema } from "../schemas";

function useModelRisk() {
  const fetchRiskModel = async () => {
    const res = await fetch("http://localhost:3000/risk_model");
    const data = await res.json();
    return RiskModelSchema.array().parse(data);
  };
  const { data, isLoading, isError } = useQuery<RiskModel[], Error>({
    queryKey: ["model"],
    queryFn: fetchRiskModel,
  });

  return { data, isLoading, isError };
}

export default useModelRisk;
