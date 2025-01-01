import React from "react";

const RefundPolicy = () => {
  const refundContent = [
    {
      title: "Journal Unavailability",
      description: `If we are unable to accommodate an author's preferred journal, they are entitled to withdraw their article without any charges. We aim to meet each author's preferences to ensure the best match for their article.`,
    },
    {
      title: "Publication Charges",
      description: `If the publication charges exceed the author's budget, they can withdraw their article without any financial penalties. We understand financial constraints and strive to support authors in a way that fits their needs.`,
    },
    {
      title: "Direct Submission After Target Journal Provision",
      description: `Once a suitable journal has been identified and provided to the author, if the author chooses to submit the article directly, they will no longer be eligible for withdrawal. Penalties may apply as per our terms and conditions.`,
    },
    {
      title: "Article Acceptance",
      description: `Once an article is accepted by the target journal, it cannot be withdrawn or cancelled. At this point, the article is in the final stages of publication, and no refunds or cancellations will be granted.`,
    },
    {
      title: "Post-Selection Withdrawal",
      description: `After the article has been selected for publication and processed for acceptance, withdrawal requests will not be entertained. Authors are committed to proceeding with the publication process.`,
    },
    {
      title: "Policy Updates",
      description: `We reserve the right to update or modify this Refund Policy at any time. The terms in effect at the time of an author’s service request will apply.`,
    },
  ];

  return (
    <div className="w-full px-16 py-12 pt-28 ">
      <div className="py-4 border-l-8 border-l-red-600 pl-3 mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Refund Policy</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {refundContent.map((section, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-red-600">{section.title}</h2>
              <span className="text-sm text-gray-500">#{index + 1}</span>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">{section.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 text-sm">
          For further questions or clarifications regarding this policy, please don't hesitate to contact to us.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
