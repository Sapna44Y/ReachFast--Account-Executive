import { FaCheck, FaTimes } from "react-icons/fa";

export default function PricingTable() {
  const plans = [
    {
      name: "beta",
      price: "$708.00",
      credits: 900,
      pricePerCredit: "$0.79",
      features: {
        freeEmails: true,
        bulkUpload: true,
        accuracyGuarantee: true,
        apiAccess: false,
        accountManager: false,
        turboSearch: false,
      },
      paymentLink: "https://reachfast.chargebee.com/hosted_pages/checkout?sut",
    },
    {
      name: "gamma",
      price: "$1,416.00",
      credits: 1800,
      pricePerCredit: "$0.79",
      features: {
        freeEmails: true,
        bulkUpload: true,
        accuracyGuarantee: true,
        apiAccess: false,
        accountManager: false,
        turboSearch: false,
      },
      paymentLink: "https://reachfast.chargebee.com/hosted_pages/checkout?sut",
    },
    {
      name: "omega",
      price: "$2,088.00",
      credits: 3600,
      pricePerCredit: "$0.58",
      features: {
        freeEmails: true,
        bulkUpload: true,
        accuracyGuarantee: true,
        apiAccess: false,
        accountManager: false,
        turboSearch: false,
      },
      paymentLink: "https://reachfast.chargebee.com/hosted_pages/checkout?sut",
    },
    {
      name: "Turbo Search",
      price: "$4,680.00",
      credits: 5000,
      pricePerCredit: "$0.94",
      features: {
        freeEmails: true,
        bulkUpload: true,
        accuracyGuarantee: true,
        apiAccess: false,
        accountManager: false,
        turboSearch: false,
      },
      paymentLink: "https://reachfast.chargebee.com/hosted_pages/checkout?sut",
    },
    {
      name: "Custom",
      price: "Min $5k/year",
      credits: "Custom",
      pricePerCredit: "Custom",
      features: {
        freeEmails: true,
        bulkUpload: true,
        accuracyGuarantee: true,
        apiAccess: false,
        accountManager: false,
        turboSearch: false,
      },
      paymentLink: "#",
    },
  ];

  const features = [
    { key: "freeEmails", label: "Free Emails" },
    { key: "bulkUpload", label: "Bulk Upload" },
    { key: "accuracyGuarantee", label: "100% Accuracy Guarantee" },
    { key: "apiAccess", label: "API Access" },
    { key: "accountManager", label: "Dedicated Account Manager" },
    { key: "turboSearch", label: "Turbo Search Functionality(20+ Fill)" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <div className="p-6 bg-blue-50">
        <h2 className="text-2xl font-bold text-blue-800">
          Annual Pricing Plans
        </h2>
        <p className="text-blue-600">Choose the plan that fits your needs</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Plan
              </th>
              {plans.map((plan) => (
                <th
                  key={plan.name}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Price ($)
              </td>
              {plans.map((plan) => (
                <td
                  key={`${plan.name}-price`}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {plan.price}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Number of Credits
              </td>
              {plans.map((plan) => (
                <td
                  key={`${plan.name}-credits`}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {plan.credits}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Price per credit ($)
              </td>
              {plans.map((plan) => (
                <td
                  key={`${plan.name}-ppc`}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {plan.pricePerCredit}
                </td>
              ))}
            </tr>

            {features.map((feature) => (
              <tr key={feature.key}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {feature.label}
                </td>
                {plans.map((plan) => (
                  <td
                    key={`${plan.name}-${feature.key}`}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {plan.features[feature.key] ? (
                      <FaCheck className="text-green-500" />
                    ) : (
                      <FaTimes className="text-red-500" />
                    )}
                  </td>
                ))}
              </tr>
            ))}

            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Payment Link
              </td>
              {plans.map((plan) => (
                <td
                  key={`${plan.name}-link`}
                  className="px-6 py-4 whitespace-nowrap text-sm text-blue-600"
                >
                  <a
                    href={plan.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Buy Now
                  </a>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
