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
    <div className="w-full h-auto px-4 sm:px-8 md:px-16 pt-20">
      {journal && (
        <div className="max-w-3xl mx-auto flex flex-col bg-red-100/30 p-6 sm:p-8 md:p-6 rounded-lg shadow-lg mt-6 ">
          {/* Journal Details */}
          <div className="mb-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              {journal?.JournalTitle?.toUpperCase() || 'Loading...'}
            </h1>

            <p className="text-base sm:text-lg text-gray-600 mb-2">
              <span className="font-semibold">E_ISSN:</span> {E_ISSN}
            </p>
            {L_ISSN && (
              <p className="text-base sm:text-lg text-gray-600 mb-2">
                <span className="font-semibold">L_ISSN:</span> {L_ISSN}
              </p>
            )}
            {P_ISSN && (
              <p className="text-base sm:text-lg text-gray-600 mb-2">
                <span className="font-semibold">P_ISSN:</span> {P_ISSN}
              </p>
            )}
            <p className="text-base sm:text-lg text-gray-600 mb-2">
              <span className="font-semibold">Chief Editor Name:</span> {ChiefEditorName}
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-2">
              <span className="font-semibold">Chief Editor Affiliation:</span> {ChiefEditorAffiliation}
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-2">
              <span className="font-semibold">Publisher:</span> {Publisher}
            </p>
          </div>

          {/* Table for Indexes */}
          {Indexes && Indexes.length > 0 && (
            <div className="mt-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Indexes</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg shadow-sm ">
                  <tbody className="flex flex-col custom:flex-row gap-5">
                    {Indexes.map((index, indexIdx) => (
                      <div key={indexIdx} className="mb-4 ">
                        {Object.entries(index)
                          .filter(([key]) => key !== "_id")
                          .map(([key, value]) => (
                            <tr key={key} className="border-t">
                              <td className="px-4 py-2 text-sm sm:text-base font-medium text-gray-800">
                                {key}
                              </td>
                              <td className="px-4 py-2 text-sm sm:text-base text-gray-800">{value}</td>
                            </tr>
                          ))}
                      </div>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <p className="mt-3 text-base sm:text-lg text-gray-600">
            <span className="font-semibold">Publication Frequency:</span> {PublicationFrequency}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end mt-6">
            <Link
              to="/journals"
              className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-center"
            >
              Go Back
            </Link>
            <Link
              to="/contactus"
              className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-center"
            >
              Let's Discuss
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default JournalDetail;
