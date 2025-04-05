import { FaArrowLeft, FaFilePdf } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";

export default function CommissionReport({ sales, onBack, onGenerateReport }) {
  const totalCommission = sales.reduce((sum, sale) => sum + sale.commission, 0);
  const totalRevenue = sales.reduce((sum, sale) => sum + sale.amount, 0);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <FaArrowLeft className="mr-2" />
          Back to Dashboard
        </button>
        <h2 className="text-xl font-bold text-gray-800">Commission Report</h2>
        <button
          onClick={onGenerateReport}
          className="flex items-center bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          <FaFilePdf className="mr-2" />
          Generate PDF
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 p-4 rounded-md">
          <p className="text-sm font-medium text-gray-600">Total Sales</p>
          <p className="text-2xl font-bold">${totalRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-md">
          <p className="text-sm font-medium text-gray-600">Total Commission</p>
          <p className="text-2xl font-bold">
            ${totalCommission.toLocaleString()}
          </p>
        </div>
        <div className="bg-purple-50 p-4 rounded-md">
          <p className="text-sm font-medium text-gray-600">Commission in INR</p>
          <p className="text-2xl font-bold flex items-center">
            <FaRupeeSign className="mr-1" />
            {(totalCommission * 83).toLocaleString()}
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Plan
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Commission
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sales.length > 0 ? (
              sales.map((sale) => (
                <tr key={sale.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {sale.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {sale.customerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {sale.planName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${sale.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                    ${sale.commission.toFixed(2)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  No sales recorded yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
