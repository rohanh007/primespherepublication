import React from "react";

// const journals = [
//     {
//         "JournalTitle": "natural volatiles and essential oils",
//         "E-ISSN": "2148-9637",
//         "P-ISSN": "Not Available",
//         "ChiefEditorName": "C. C. Yin",
//         "ChiefEditorAffiliation": "Associate Professor, Cancer Center, USA",
//         "Publisher": "Badebio Biotechnology Ltd",
//         "Indexes": [
//             {
//                 "Indexing": "Sub-Indexing",
//                 "Sub-Indexing": "q3"
//             },
//             {
//                 "Indexing": "Impact Factor",
//                 "CiteScore": "0.6"
//             }
//         ],
//         "PublicationFrequency": 6
//     },

//     {
//         "JournalTitle": "journal of advanced zoology",
//         "E-ISSN": "0253-7214",
//         "P-ISSN": "Not Available",
//         "ChiefEditorName": "",
//         "ChiefEditorAffiliation": "",
//         "Publisher": "Not Available",
//         "Indexes": [
//             {
//                 "Indexing": "scopus",
//                 "Sub-Indexing": "q4",
//                 "ImpactFactor": "0"
//             },
//             {
//                 "Indexing": "web of science",
//                 "Sub-Indexing": "zoological record",
//                 "ImpactFactor": "0.104"
//             },
//             {
//                 "Indexing": "google scholar",
//                 "Sub-Indexing": "Not Available",
//                 "ImpactFactor": "not available"
//             }
//         ],
//         "PublicationFrequency": 0
//     },

//     {
//         "JournalTitle": "african journal of biological sciences (south africa)",
//         "E-ISSN": "2663-2187",
//         "P-ISSN": "Not Available",
//         "ChiefEditorName": "Dr. Eugene A. Silow",
//         "ChiefEditorAffiliation": "Not Available",
//         "Publisher": "African Science Publications",
//         "SubjectArea": "agricultural and biological sciences: agricultural and biological sciences (miscellaneous); agricultural and biological sciences: animal science and zoology; biochemistry, genetics and molecular biology: biotechnology; biochemistry, genetics and molecular biology: biochemistry",
//         "Indexes": [
//             {
//                 "Indexing": "scopus",
//                 "Sub-Indexing": "q4",
//                 "ImpactFactor": "0.1"
//             }
//         ],
//         "PublicationFrequency": 0
//     },

//     {
//         "JournalTitle": "european economic letters",
//         "E-ISSN": "2323-5233",
//         "P-ISSN": "2323-5233",
//         "ChiefEditorName": "Narjess Aloui",
//         "ChiefEditorAffiliation": "Assistant Professor, Carthage Business School University of Tunis Carthage, Fattouma Bourguiba Avenue, Tunis 2036, Tunisia",
//         "Publisher": "eelet.org.uk",
//         "Indexes": [
//             {
//                 "Indexing": "abdc",
//                 "Sub-Indexing": "c",
//                 "Rating": "not available"
//             }
//         ],
//         "PublicationFrequency": 4
//     },

//     {
//         "JournalTitle": "european journal of molecular & clinical medicine",
//         "E-ISSN": "2515-8260",
//         "ChiefEditorName": "C. C. Yin",
//         "ChiefEditorAffiliation": "Associate Professor, Cancer Center, USA.",
//         "Publisher": "EJMCM, International House",
//         "Indexes": [
//             {
//                 "Indexing": "web of science",
//                 "Sub-Indexing": "esci",
//                 "ImpactFactor": "0"
//             },
//             {
//                 "Indexing": "discontinued from scopus",
//                 "Sub-Indexing": "q4",
//                 "ImpactFactor": "0.2"
//             }
//         ],
//         "PublicationFrequency": 6
//     },

//     {
//         "JournalTitle": "educational administration: theory and practice",
//         "E-ISSN": "2148-2403",
//         "P-ISSN": "1300-4832",
//         "ChiefEditorName": "Dr. D.P Kothari",
//         "ChiefEditorAffiliation": "Director Research at Wainganga College of Engineering and Management, Nagpur, Former Vice Chancellor at VIT University Vellore",
//         "Publisher": "Auricle Global Society of Education and Research",
//         "Indexes": [
//             {
//                 "Indexing": "scopus",
//                 "Sub-Indexing": "q3",
//                 "CiteScore": "0.8"
//             }
//         ],
//         "PublicationFrequency": 12
//     },

//     {
//         "JournalTitle": "journal of population therapeutics and clinical pharmacology",
//         "E-ISSN": "2561-8741",
//         "ChiefEditorName": "Dr. Ayad F. Alkaim",
//         "ChiefEditorAffiliation": "University of Babylon, College of Science for Women, Babylon, Iraq",
//         "Publisher": "Dougmar Publishing Group Inc",
//         "Indexes": [
//             {
//                 "Indexing": "embase",
//                 "ImpactFactor": "not available"
//             },
//             {
//                 "Indexing": "scopus",
//                 "Sub-Indexing": "q3",
//                 "CiteScore": "1.8"
//             },
//             {
//                 "Indexing": "web of science",
//                 "Sub-Indexing": "esci",
//                 "ImpactFactor": "not available"
//             }
//         ],
//         "PublicationFrequency": 0
//     },

//     {
//         "JournalTitle": "journal of critical review",
//         "E-ISSN": "2394-5125",
//         "ChiefEditorName": "Dr. Sahajeev Sannam Singh",
//         "ChiefEditorAffiliation": "",
//         "Publisher": "Innovare Academics Sciences Pvt. Ltd",
//         "Indexes": [
//             {
//                 "Indexing": "discontinued from scopus",
//                 "Sub-Indexing": "q4",
//                 "ImpactFactor": "0.6"
//             }
//         ],
//         "PublicationFrequency": 0
//     },

//     {
//         "JournalTitle": "journal of informatics education and research",
//         "E-ISSN": "1526-4726",
//         "Publisher": "JIER",
//         "Indexes": [
//             {
//                 "Indexing": "abdc",
//                 "Sub-Indexing": "c",
//                 "Rating": "0"
//             }
//         ],
//         "PublicationFrequency": 0
//     },

//     {
//         "JournalTitle": "european chemical bulletin",
//         "E-ISSN": "2063-5346",
//         "ChiefEditorName": "Prof. Dr. Kalyan K. Banerji",
//         "ChiefEditorAffiliation": "Department of Chemistry, J.N.V. University, Jodhpur, India",
//         "Publisher": "Deuton-X Ltd.",
//         "Indexes": [
//             {
//                 "Indexing": "doaj",
//                 "ImpactFactor": "0"
//             },
//             {
//                 "Indexing": "discontinued from scopus",
//                 "Sub-Indexing": "q3",
//                 "ImpactFactor": "0.8"
//             }
//         ],
//         "PublicationFrequency": 12
//     },

//     {
//         "JournalTitle": "journal of survey in fisheries sciences (sfs)",
//         "E-ISSN": "2368-7487",
//         "ChiefEditorName": "Prof. Dr. Bahmani",
//         "ChiefEditorAffiliation": "",
//         "Publisher": "Green Wave Publishing of Canada",
//         "Indexes": [
//             {
//                 "Indexing": "web of science",
//                 "Sub-Indexing": "zoological record",
//                 "ImpactFactor": "0"
//             },
//             {
//                 "Indexing": "discontinued from scopus",
//                 "Sub-Indexing": "q3",
//                 "ImpactFactor": "1.0"
//             }
//         ],
//         "PublicationFrequency": 2
//     },

//     {
//         "JournalTitle": "neuroquantology",
//         "E-ISSN": "1303-5150",
//         "ChiefEditorName": "Prof. Dr. Riyaz Ahmed Abdul Khan",
//         "ChiefEditorAffiliation": "Editor in Chief (Neuroquantology)",
//         "Publisher": "Anka Publishers",
//         "Indexes": [
//             {
//                 "Indexing": "embase",
//                 "ImpactFactor": "0"
//             },
//             {
//                 "Indexing": "discontinued from scopus",
//                 "Sub-Indexing": "q4",
//                 "ImpactFactor": "1.3"
//             }
//         ],
//         "PublicationFrequency": 12
//     },

//     {
//         "JournalTitle": "international journal of food and nutritional sciences",
//         "E-ISSN": "2320-7876",
//         "ChiefEditorName": "Prof. Dr. Jaâfar Heikel",
//         "ChiefEditorAffiliation": "Professeur de Médecine et d’Épidémiologie, Spécialiste en Maladies Infectieuses et Santé Publique, Diplômé Universitaire en Nutrition et Maladies Métaboliques, Diplômé Universitaire en Gériatrie, Économiste de la Santé, Chercheur CEPN, Sorbonne-Paris",
//         "Publisher": "Global E Smart Technologies",
//         "Indexes": [
//             {
//                 "Indexing": "ugc",
//                 "Sub-Indexing": "group 1",
//                 "ImpactFactor": "0"
//             }
//         ],
//         "PublicationFrequency": 4
//     },
//     {
//         "JournalTitle": "revista electronica de veterinaria",
//         "E-ISSN": "1695-7504",
//         "P-ISSN": "1695-7504",
//         "ChiefEditorName": "Dr. Kuldeep Dhama",
//         "ChiefEditorAffiliation": "Principal Scientist M.V.Sc., Ph.D. (Gold Medalist), NAAS Associate, Fellow Royal Society of Medicine (FRSM, UK)",
//         "Publisher": "Veterinary Organization",
//         "Indexes": [
//             {
//                 "Indexing": "scopus",
//                 "Sub-Indexing": "q4",
//                 "CiteScore": "0.3"
//             }
//         ],
//         "PublicationFrequency": 4
//     }

// ]

const JournalCard = ({ journal }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 w-full md:w-1/3">
      {/* <h2 className="text-xl font-bold text-gray-800">{journal.JournalTitle}</h2>
      <p className="text-sm text-gray-600">
        <strong>E-ISSN:</strong> {journal["E-ISSN"] || "Not Available"}
      </p>
      <p className="text-sm text-gray-600">
        <strong>P-ISSN:</strong> {journal["P-ISSN"] || "Not Available"}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Chief Editor:</strong> {journal.ChiefEditorName || "Not Available"}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Publisher:</strong> {journal.Publisher || "Not Available"}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Publication Frequency:</strong> {journal.PublicationFrequency}
      </p>
      <div className="mt-4">
        <h3 className="font-bold text-gray-700">Indexes:</h3>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {journal.Indexes.map((index, idx) => (
            <li key={idx}>
              <strong>{index.Indexing}:</strong> {index.SubIndexing || "N/A"}
              {index.ImpactFactor && (
                <span className="ml-2">
                  <strong>Impact Factor:</strong> {index.ImpactFactor}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center mt-4">
        <a
          href={`https://wa.me/?text=Hello, I want to know more about ${journal.JournalTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
        >
          Contact on WhatsApp
        </a>
        <a
          href="/contact-form"
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        >
          Contact Form
        </a>
      </div> */}
    </div>
  );
};

const JournalsList = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Journals List
      </h1>
      <div className="flex flex-wrap justify-center">
        {journals.map((journal, index) => (
          <JournalCard key={index} journal={journal} />
        ))}
      </div> */}
    </div>
  );
};

export default JournalsList;
