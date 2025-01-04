import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const JournalDetail = () => {
  const [journal, setJournal] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchJournal = async () => {
      try {
        const { data } = await axios.get(`http://localhost:4300/api/journal/${id}`);
        setJournal(data.data); 
      } catch (error) {
        console.error("Error fetching journal details:", error);
      }
    };

    fetchJournal();
  }, [id]);

  const {
    JournalTitle,
    E_ISSN,
    L_ISSN,
    P_ISSN,
    ChiefEditorAffiliation,
    ChiefEditorName,
    PublicationFrequency,
    Publisher,
    Indexes,
  } = journal;

  return (
    <div className="w-full h-auto px-6 md:px-16 pt-32 ">
      {journal && (
        <div className="w-[75%] mx-auto flex flex-col bg-red-100/30 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">{JournalTitle}</h1>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold">E_ISSN:</span> {E_ISSN}
            </p>
            {L_ISSN && (
              <p className="text-lg text-gray-600 mb-2">
                <span className="font-semibold">L_ISSN:</span> {L_ISSN}
              </p>
            )}
            {P_ISSN && (
              <p className="text-lg text-gray-600 mb-2">
                <span className="font-semibold">P_ISSN:</span> {P_ISSN}
              </p>
            )}
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold">Chief Editor Name:</span> {ChiefEditorName}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold">Chief Editor Affiliation:</span> {ChiefEditorAffiliation}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold">Publisher:</span> {Publisher}
            </p>
          </div>

          {/* Table for Indexes */}
          {Indexes && Indexes.length > 0 && (
            <div className="mt-2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Indexes</h2>
              <table className="min-w-full table-auto border-collapse rounded-lg">
                <tbody className="flex flex-row gap-5">
                  {Indexes.map((index, indexIdx) => (
                    <div key={indexIdx}>
                      {Object.entries(index)
                        .filter(([key]) => key !== "_id")
                        .map(([key, value]) => (
                          <tr key={key}>
                            <td className="border-2 border-red-500 px-4 py-2 text-gray-800">
                              <strong>{key}</strong>
                            </td>
                            <td className="border-2 border-red-500 px-4 py-2 text-gray-800">
                              {value}
                            </td>
                          </tr>
                        ))}
                    </div>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <p className="mt-6 text-lg text-gray-600">
            <span className="font-semibold">Publication Frequency:</span> {PublicationFrequency}
          </p>
          <div className=" flex flex-row gap-3 justify-end">
            <Link to='/journallist' className="btn btn-primary px-6 py-2 bg-red-500 rounded-md text-white">Go Back</Link>
            <Link to='/contactus' className="btn btn-primary px-6 py-2 bg-red-500 rounded-md text-white">Contact Us</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default JournalDetail;
