import React, { useState } from "react";
import SearchResult from "./components/SearchResult";

type ApiResult = {
  name: string;
  description: string;
  tags: string[];
  docs_url: string;
  score: number;
};

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ApiResult[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(`https://semanticsearchapi.onrender.com/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        🔍 Semantic API Search
      </h1>

      <form onSubmit={handleSearch} className="w-full max-w-xl flex gap-2">
        <input
          type="text"
          placeholder="Search for APIs (e.g., send OTP, maps, payments)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div className="w-full max-w-xl mt-6 space-y-4">
        {loading && <p className="text-gray-500">Searching...</p>}
        {!loading &&
          results.map((res, i) => <SearchResult key={i} result={res} />)}
      </div>
    </div>
  );
}

export default App;
