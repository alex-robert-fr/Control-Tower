import { useQuery } from "@tanstack/react-query";
import { DomainSchema } from "../schemas";
import { Domain } from "../App";

export default function useDomain() {
  const fetchDomains = async () => {
    const res = await fetch("http://localhost:3000/domains");
    const data = await res.json();
    return DomainSchema.array().parse(data);
  };
  const { data, isLoading, isError } = useQuery<Domain[]>({
    queryKey: ["domains"],
    queryFn: fetchDomains,
  });

  return { data, isLoading, isError };
}
