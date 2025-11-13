"use client";

import useApiKeyRequired from "./useApiKeyRequired";

import SearchBar from "./SeachBar";
import useMovieQuery from "./useMovieQuery";

export default function Home() {
  const { data, error, isLoading } = useMovieQuery(debounced);

  useApiKeyRequired();
  useMovieQuery();
  return (
    <div className="min-h-full flex items-center justify-center">
      <main>
        <h1 className="text-5xl font-extrabold">Movie finder</h1>
        <SearchBar />
        <p>{data.searchTerm}</p>
      </main>
    </div>
  );
}
