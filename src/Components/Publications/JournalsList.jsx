import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate} from "react-router-dom";
import _ from "lodash";

const Journallist = () => {
  const [query, setQuery] = useState("");
  const [journals, setJournals] = useState([]);
  // const [jorunalId, setJournalId]=useState(null);
  const [filteredJournals, setFilteredJournals] = useState([]);

     const navigate=useNavigate()

  // const handledetails=(id, data)=>{
  //   navigate(`/journal/${id}`);
  // }

  useEffect(() => {
    fetch("http://localhost:4300/api/journallist") 
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJournals(data.journallist)})
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
    <div className="w-full px-16 pt-28">
      <div className="relative flex items-center justify-center mb-6">
        <input
          type="text"
          placeholder="Search journals..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-[50%] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 outline-none"
        />
        <IoSearch className="absolute right-[28%] text-gray-500" size={24} />
      </div>
      <div className="w-full grid grid-cols-3 gap-4">
        {filteredJournals.length > 0 ? (
          filteredJournals.map((journal) => (
            <div
              key={journal.id}
              className="h-44 p-6 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow relative z-0"
            >
              
              <h4 className="font-semibold text-lg mb-2">{journal.JournalTitle.toUpperCase()}</h4>
              <div className="flex flex-row justify-between py-2">
              <p className="text-gray-600"><span className="font-semibold">E_ISSN : </span>{journal.E_ISSN}</p>

              {journal.P_ISSN && (
                 <p className="text-gray-600"><span className="font-semibold">P_ISSN : </span>{journal.P_ISSN}</p>
              )}
              {journal.L_ISSN && (
                 <p className="text-gray-600"><span className="font-semibold">L_ISSN : </span>{journal.L_ISSN}</p>
              )}
              </div>
              <div className="absolute z-20  right-10 bottom-5">
              <Link to={`/journal/${journal.E_ISSN}`} className="btn btn-primary px-6 py-2 bg-red-500 rounded-md text-white" onClick={()=>{
                const id=journal.E_ISSN;
                // handledetails(id);
              }}>Details</Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No journals found.</p>
        )}
      </div>
    </div>
  );
};

export default Journallist;
