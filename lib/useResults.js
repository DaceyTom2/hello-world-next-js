import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGetResults = (path) => {
  if (!path) {
    throw new Error("Path is required");
  }
  console.log(path);
  const { data: results, error } = useSWR(path, fetcher);
  console.log(results);
  console.log(error);
  return { results, error };
};
