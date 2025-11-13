"use client";

import { useEffect, useState } from "react";
import useDebounceValue from "./useDebounceValue";

export default function SearchBar() {
  const [search, setSearch] = useQueryState("search", "");
  const debouncedSearch = useDebounceValue(search, 500);
  console.log({ search, debouncedSearch });

  return (
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
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2.5"
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
  );
}
