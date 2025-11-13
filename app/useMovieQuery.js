import useSWR from "swr";

export default function useMovieQuery(search) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `http://www.omdbapi.com?s=<search>&apiKey=<apiKey>`,
    fetcher
  );

  if (error) return <div>échec du chargement</div>;
  if (isLoading) return <div>chargement...</div>;

  // rendu des données
  return <div>bonjour {data.name}!</div>;
}
