import React from "react";

type SearchResultProps = {
  result: {
    name: string;
    description: string;
    tags: string[];
    docs_url: string;
    score: number;
  };
};

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white">
      <h3 className="text-lg font-semibold">{result.name}</h3>
      <p className="text-gray-600">{result.description}</p>
      <div className="flex flex-wrap mt-2 gap-2">
        {result.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={result.docs_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-sm mt-2 inline-block hover:underline"
      >
        View Docs →
      </a>
    </div>
  );
};

export default SearchResult;
