import { FaRupeeSign, FaDollarSign } from "react-icons/fa";

export default function Commissions() {
  // Mock data - in a real app this would come from an API
  const commissions = [
    {
      id: 1,
      date: "2023-06-01",
      plan: "Turbo Search",
      amount: 468,
      status: "paid",
    },
    { id: 2, date: "2023-06-05", plan: "Beta", amount: 70.8, status: "paid" },
    {
      id: 3,
      date: "2023-06-10",
      plan: "Turbo Search",
      amount: 468,
      status: "pending",
    },
    {
      id: 4,
      date: "2023-06-12",
      plan: "Omega",
      amount: 208.8,
      status: "pending",
    },
  ];

  const totalPaid = commissions
    .filter((c) => c.status === "paid")
    .reduce((sum, c) => sum + c.amount, 0);

  const totalPending = commissions
    .filter((c) => c.status === "pending")
    .reduce((sum, c) => sum + c.amount, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Commission Tracking
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Paid</p>
              <p className="text-2xl font-bold text-green-800 flex items-center">
                <FaDollarSign className="mr-1" />
                {totalPaid.toFixed(2)}
                <span className="ml-2 text-sm font-normal text-gray-600 flex items-center">
                  (≈ <FaRupeeSign className="mx-1" />{" "}
                  {Math.round(totalPaid * 83)})
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Pending Payment
              </p>
              <p className="text-2xl font-bold text-blue-800 flex items-center">
                <FaDollarSign className="mr-1" />
                {totalPending.toFixed(2)}
                <span className="ml-2 text-sm font-normal text-gray-600 flex items-center">
                  (≈ <FaRupeeSign className="mx-1" />{" "}
                  {Math.round(totalPending * 83)})
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Plan
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount (USD)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount (INR)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {commissions.map((commission) => (
              <tr key={commission.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {commission.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {commission.plan}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${commission.amount.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ₹{Math.round(commission.amount * 83)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      commission.status === "paid"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {commission.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
