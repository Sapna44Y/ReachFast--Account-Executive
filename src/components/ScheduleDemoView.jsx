import { useState } from "react";
import { FaArrowLeft, FaCalendarAlt } from "react-icons/fa";

export default function ScheduleDemoView({ onBack, onSave }) {
  const [formData, setFormData] = useState({
    prospectName: "",
    company: "",
    email: "",
    time: "",
    type: "standard",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: Date.now(),
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
          <FaCalendarAlt className="mr-2" />
          Schedule New Demo
        </h2>
        <div></div> {/* Empty div for spacing */}
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Prospect Name
            </label>
            <input
              type="text"
              name="prospectName"
              value={formData.prospectName}
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
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Demo Type
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="type"
                  value="standard"
                  checked={formData.type === "standard"}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600"
                />
                <span>Standard Demo</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="type"
                  value="turbo"
                  checked={formData.type === "turbo"}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600"
                />
                <span>Turbo Search Demo</span>
              </label>
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
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Schedule Demo
          </button>
        </div>
      </form>
    </div>
  );
}
