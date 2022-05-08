import { useSearchParams } from "react-router-dom";

export const useQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = Object.fromEntries([...searchParams]);
  return [query, setSearchParams];
};
