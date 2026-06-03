"use client";

export default function SearchBar({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (value: string) => void;
}) {
  return (
    <input
      className="border p-2 rounded w-full"
      placeholder="Search products..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />
  );
}