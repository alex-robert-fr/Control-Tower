import { URL_API } from "@services";
import { useQuery } from "@tanstack/react-query";
import { ZodSchema } from "zod";

export function useFetchData(
  endpoint: string,
  schema: ZodSchema,
  queryKey: string,
	isArray: boolean = true
) {
  const fetchData = async () => {
    const res = await fetch(`${URL_API}/${endpoint}`);
    const data = await res.json();
		if (!isArray)
			return schema.parse(data);
    return schema.array().parse(data);
  };


  const { data, isLoading, isError } = useQuery({
    queryKey: [queryKey],
    queryFn: fetchData,
  });

  return { data, isLoading, isError };
}
