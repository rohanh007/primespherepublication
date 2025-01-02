import React from "react";

const PrivacyPolicy = () => {
  const privacyContent = [
    {
      title: "Information Collection",
      description: `We collect personal details such as your name, email address, phone number, academic background, and institutional affiliation. This information is voluntarily provided during registration or while requesting consultation services.`,
    },
    {
      title: "Use of Information",
      description: `The information we collect helps us deliver research publication assistance tailored to your specific needs. It enables us to identify users, facilitate communication, and offer services effectively.`,
    },
    {
      title: "Data Security",
      description: `We implement reasonable security measures to protect your personal data. However, please note that no internet transmission or electronic storage method can guarantee 100% security. We take all necessary precautions but cannot ensure complete security.`,
    },
    {
      title: "Information Sharing",
      description: `We do not share your personal information with third parties unless we have your explicit consent or are required by law. Your data is only used for providing our research publication services.`,
    },
    {
      title: "Data Retention",
      description: `Your personal information will be retained for as long as necessary to fulfill its intended purpose and meet legal obligations. Once this period has passed, we ensure your data is securely deleted or anonymized.`,
    },
    {
      title: "Cookies and Tracking",
      description: `Our website may use cookies or similar technologies to improve user experience and collect non-personal data such as browser type and IP address. You can adjust your browser settings to disable cookies if preferred.`,
    },
    {
      title: "Third-Party Links",
      description: `Our website may include links to third-party sites. We are not responsible for the privacy practices of these external sites. We recommend reviewing their privacy policies before providing any personal information.`,
    },
    {
      title: "Policy Updates",
      description: `We reserve the right to update or amend this Privacy Policy at any time. Changes will be reflected on this page, and the updated policy will take effect immediately upon publication.`,
    },
  ];

  return (
    <div className="w-full px-16 py-12 pt-28">
      <div className="py-4 border-l-4 border-l-red-600 pl-3 mb-6">
        <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
      </div>

      <div className="flex flex-col gap-8">
        {privacyContent.map((section, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-300"
          >
            <h2 className="text-2xl font-semibold text-red-600">{section.title}</h2>
            <p className="text-base text-gray-700 leading-relaxed mt-3">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
