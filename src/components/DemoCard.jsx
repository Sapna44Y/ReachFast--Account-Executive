import {
  FaUser,
  FaCalendar,
  FaClock,
  FaPhone,
  FaInfoCircle,
} from "react-icons/fa";

export default function DemoCard({ demo, onClose }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 border-l-4 border-blue-500">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800 flex items-center">
            <FaUser className="mr-2 text-blue-500" />
            {demo.prospectName}
          </h3>
          <p className="text-gray-600">{demo.company}</p>
        </div>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            demo.status === "scheduled"
              ? "bg-blue-100 text-blue-800"
              : demo.status === "completed"
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {demo.status}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex items-center">
          <FaCalendar className="mr-2 text-blue-500" />
          <span>{demo.date}</span>
        </div>
        <div className="flex items-center">
          <FaClock className="mr-2 text-blue-500" />
          <span>{demo.time}</span>
        </div>
        <div className="flex items-center">
          <FaPhone className="mr-2 text-blue-500" />
          <span>{demo.contact}</span>
        </div>
        <div className="flex items-center">
          <FaInfoCircle className="mr-2 text-blue-500" />
          <span>Interest: {demo.interestLevel}</span>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => onClose(demo.id, "completed")}
        >
          Mark as Completed
        </button>
        <button
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={() => onClose(demo.id, "no_show")}
        >
          No Show
        </button>
      </div>
    </div>
  );
}
