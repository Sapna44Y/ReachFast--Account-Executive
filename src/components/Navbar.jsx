import { Link } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaMoneyBillWave } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-xl font-bold">
              ReachFast AE Dashboard
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link
              to="/"
              className="flex items-center space-x-1 hover:text-blue-200"
            >
              <FaHome />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/demos"
              className="flex items-center space-x-1 hover:text-blue-200"
            >
              <FaCalendarAlt />
              <span>Demos</span>
            </Link>
            <Link
              to="/commissions"
              className="flex items-center space-x-1 hover:text-blue-200"
            >
              <FaMoneyBillWave />
              <span>Commissions</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
