import { useState } from "react";
import { FaArrowLeft, FaDollarSign, FaRupeeSign } from "react-icons/fa";

export default function RecordSaleView({ onBack, onSave }) {
  const [formData, setFormData] = useState({
    customerName: "",
    company: "",
    plan: "beta",
    amount: 708,
    date: new Date().toISOString().split("T")[0],
  });

  const plans = [
    { id: "beta", name: "Beta", price: 708, commissionRate: 0.1 },
    { id: "gamma", name: "Gamma", price: 1416, commissionRate: 0.1 },
    { id: "omega", name: "Omega", price: 2088, commissionRate: 0.1 },
    { id: "turbo", name: "Turbo Search", price: 4680, commissionRate: 0.1 },
    { id: "custom", name: "Custom", price: 5000, commissionRate: 0.1 },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "plan") {
      const selectedPlan = plans.find((p) => p.id === value);
      setFormData((prev) => ({
        ...prev,
        plan: value,
        amount: selectedPlan.price,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedPlan = plans.find((p) => p.id === formData.plan);
    const commission = formData.amount * selectedPlan.commissionRate;

    onSave({
      ...formData,
      id: Date.now(),
      commission,
      planName: selectedPlan.name,
    });
  };

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
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          <FaDollarSign className="mr-2" />
          Record New Sale
        </h2>
        <div></div> {/* Empty div for spacing */}
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Customer Name
            </label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Plan
            </label>
            <select
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              {plans.map((plan) => (
                <option key={plan.id} value={plan.id}>
                  {plan.name} (${plan.price})
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount ($)
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
              min="0"
              step="0.01"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4 md:col-span-2 bg-blue-50 p-4 rounded-md">
            <p className="text-sm font-medium">Estimated Commission:</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-lg font-bold">
                ${(formData.amount * 0.1).toFixed(2)}
              </p>
              <p className="text-lg font-bold flex items-center">
                <FaRupeeSign className="mr-1" />
                {Math.round(formData.amount * 0.1 * 83).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-3 mt-8">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Record Sale
          </button>
        </div>
      </form>
    </div>
  );
}
