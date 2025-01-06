import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const JournalList = () => {
  const [query, setQuery] = useState("");
  const [journals, setJournals] = useState([]);
  const [filteredJournals, setFilteredJournals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4300/api/journallist")
      .then((response) => response.json())
      .then((data) => {
        setJournals(data.journallist);
      })
      .catch((error) => console.error("Error fetching journals:", error));
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredJournals(journals);
    } else {
      setFilteredJournals(
        journals.filter((journal) =>
          journal.JournalTitle.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }, [query, journals]);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 pt-28">
      {/* Search Bar */}
      <div className="relative flex items-center justify-center mb-6">
        <input
          type="text"
          placeholder="Search journals..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full sm:w-[70%] lg:w-[50%] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 outline-none"
        />
        <IoSearch className="absolute right-[5%] sm:right-[17%] lg:right-[27%] text-gray-500" size={24} />
      </div>

      {/* Journals Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJournals.length > 0 ? (
          filteredJournals.map((journal) => (
            <div
              key={journal.id}
              className="h-auto p-6 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <h4 className="font-semibold text-lg mb-2 text-center sm:text-left">
                {journal.JournalTitle.toUpperCase()}
              </h4>
              <div className="flex flex-col space-y-1">
                <p className="text-gray-600">
                  <span className="font-semibold">E_ISSN:</span> {journal.E_ISSN}
                </p>
                {journal.P_ISSN && (
                  <p className="text-gray-600">
                    <span className="font-semibold">P_ISSN:</span> {journal.P_ISSN}
                  </p>
                )}
                {journal.L_ISSN && (
                  <p className="text-gray-600">
                    <span className="font-semibold">L_ISSN:</span> {journal.L_ISSN}
                  </p>
                )}
              </div>
              <div className="mt-4 w-full flex flex-row justify-end items-center">
                <Link
                  to={`/journal/${journal.E_ISSN}`}
                  className="btn btn-primary px-2 custom:px-6 py-2 bg-red-500 rounded-md text-white block text-center w-[40%] "
                >
                  Details
                </Link>
              </div>  
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No journals found.</p>
        )}
      </div>
    </div>
  );
};

export default JournalList;
