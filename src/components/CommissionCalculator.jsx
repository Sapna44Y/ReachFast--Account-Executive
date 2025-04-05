import { useState } from "react";

export default function CommissionCalculator() {
  const [betaSales, setBetaSales] = useState(0);
  const [turboSales, setTurboSales] = useState(0);

  const betaCommission = betaSales * 708 * 0.1;
  const turboCommission = turboSales * 4680 * 0.1;
  const totalCommission = betaCommission + turboCommission;
  const totalINR = totalCommission * 83; // Assuming 1 USD = 83 INR

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold text-blue-800 mb-4">
        Commission Calculator
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Beta Plans Sold
          </label>
          <input
            type="number"
            min="0"
            value={betaSales}
            onChange={(e) => setBetaSales(parseInt(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="mt-2 text-sm text-gray-600">
            Commission: ${betaCommission.toFixed(2)} (₹
            {Math.round(betaCommission * 83)})
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Turbo Search Plans Sold
          </label>
          <input
            type="number"
            min="0"
            value={turboSales}
            onChange={(e) => setTurboSales(parseInt(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="mt-2 text-sm text-gray-600">
            Commission: ${turboCommission.toFixed(2)} (₹
            {Math.round(turboCommission * 83)})
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-md">
        <h3 className="font-bold text-blue-800 mb-2">
          Total Estimated Commission
        </h3>
        <p className="text-2xl font-bold">${totalCommission.toFixed(2)}</p>
        <p className="text-lg">≈ ₹{Math.round(totalINR)}</p>
      </div>

      <div className="mt-6">
        <h3 className="font-bold text-blue-800 mb-2">
          Earning Potential Scenarios
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-3 rounded-md">
            <h4 className="font-bold text-green-800">
              Conservative (3 sales/month)
            </h4>
            <p>
              3 Beta: <span className="font-bold">$212.40</span>
            </p>
            <p>
              3 Turbo: <span className="font-bold">$1,404.00</span>
            </p>
            <p>
              Total: <span className="font-bold">$1,616.40</span>
            </p>
          </div>
          <div className="bg-purple-50 p-3 rounded-md">
            <h4 className="font-bold text-purple-800">
              Ambitious (10 sales/month)
            </h4>
            <p>
              10 Beta: <span className="font-bold">$708.00</span>
            </p>
            <p>
              10 Turbo: <span className="font-bold">$4,680.00</span>
            </p>
            <p>
              Total: <span className="font-bold">$5,388.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
