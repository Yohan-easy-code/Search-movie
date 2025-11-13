"use client";

import useApiKeyRequired from "./useApiKeyRequired";
import useDebounceValue from "./useDebounceValue";

import useMovieQuery from "./useMovieQuery";
import useQueryState from "./useQueryState";

export default function Home() {
  const [search, setSearch] = useQueryState("search", "");
  const debouncedSearch = useDebounceValue(search, 500);
  const { data, error, isLoading } = useMovieQuery(debouncedSearch);

  useApiKeyRequired();
  useMovieQuery();
  return (
    <div className="min-h-full flex flex-col gap-4 py-8 items-center justify-center">
      <header>
        <h1 className="text-5xl font-extrabold">Movie finder</h1>
        <div className="form-control w-full max-w-md">
          <fieldset className="fieldset border border-neutral-500 p-4 rounded-lg">
            <legend className="fieldset-legend">Search</legend>
            <label className="input input-lg">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
            </label>
            <p>{debouncedSearch}</p>
          </fieldset>
        </div>
      </header>
      <main>
        <div className="grid w-full grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {isLoading
            ? Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="w-full h-full object-cover rounded-md shadow aspect-[2/3] skeleton"></div>
                  <div>
                    <p className="text-sm font-medium h-5 w-1/2 skeleton"></p>
                    <p className="text-xs font-medium h-4 w-1/3 skeleton"></p>
                  </div>
                </div>
              ))
            : null}
          {data?.Search?.length > 0
            ? data.Search.map((movie) => (
                <div key={movie.imdbID} className="flex flex-col gap-4">
                  <img
                    src={movie.Poster}
                    alt={`${movie.Title}'s poster`}
                    className="w-full h-full object-cover rounded-md shadow aspect-[2/3]"
                  ></img>
                  <div>
                    <p className="text-sm font-medium">{movie.Title}</p>
                    <p className="text-xs font-medium">
                      {movie.Years} | {movie.Type}
                    </p>
                  </div>
                </div>
              ))
            : null}
        </div>
      </main>
    </div>
  );
}
