
import { useState } from "react";
import PricingTable from "../components/PricingTable";
import CommissionCalculator from "../components/CommissionCalculator";
import {
  FaChartLine,
  FaDollarSign,
  FaCalendarAlt,
  FaFilePdf,
} from "react-icons/fa";
import ScheduleDemoView from "../components/ScheduleDemoView";
import RecordSaleView from "../components/RecordSaleView";
import CalendarView from "../components/CalendarView";
import CommissionReport from "../components/CommissionReport";

export default function Dashboard() {
  // View states
  const [currentView, setCurrentView] = useState("dashboard");

  // Mock data
  const [stats, setStats] = useState([
    {
      title: "Monthly Commissions",
      value: "$1,250",
      icon: <FaDollarSign />,
      trend: "up",
    },
    {
      title: "Demos Completed",
      value: "8",
      icon: <FaCalendarAlt />,
      trend: "up",
    },
    {
      title: "Conversion Rate",
      value: "25%",
      icon: <FaChartLine />,
      trend: "steady",
    },
  ]);

  const [todaysDemos, setTodaysDemos] = useState([]);
  const [sales, setSales] = useState([]);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Demo with Acme Inc",
      start: new Date().setHours(10, 0, 0),
      end: new Date().setHours(10, 30, 0),
      type: "demo",
    },
  ]);

  // Handle view changes
  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  // Handle new demo scheduled
  const handleNewDemo = (newDemo) => {
    const demoEvent = {
      id: Date.now(),
      title: `Demo with ${newDemo.prospectName}`,
      start: new Date(`${new Date().toDateString()} ${newDemo.time}`).getTime(),
      end:
        new Date(`${new Date().toDateString()} ${newDemo.time}`).getTime() +
        30 * 60000,
      type: "demo",
    };

    setTodaysDemos([...todaysDemos, newDemo]);
    setEvents([...events, demoEvent]);
    setCurrentView("dashboard");

    // Update stats
    setStats((prevStats) => [
      prevStats[0],
      {
        ...prevStats[1],
        value: (parseInt(prevStats[1].value) + 1).toString(),
      },
      prevStats[2],
    ]);
  };

  // Handle new sale recorded
  const handleNewSale = (newSale) => {
    setSales([...sales, newSale]);
    setCurrentView("dashboard");

    // Update stats
    setStats((prevStats) => [
      {
        ...prevStats[0],
        value: `$${(
          parseInt(prevStats[0].value.replace(/\D/g, "")) + newSale.commission
        ).toLocaleString()}`,
      },
      prevStats[1],
      prevStats[2],
    ]);
  };

  // Handle report generation
  const handleGenerateReport = () => {
    alert("PDF report generated successfully!");
    setCurrentView("dashboard");
  };

  // Render current view
  const renderView = () => {
    switch (currentView) {
      case "schedule":
        return (
          <ScheduleDemoView
            onBack={() => setCurrentView("dashboard")}
            onSave={handleNewDemo}
          />
        );
      case "record":
        return (
          <RecordSaleView
            onBack={() => setCurrentView("dashboard")}
            onSave={handleNewSale}
          />
        );
      case "calendar":
        return (
          <CalendarView
            events={events}
            onBack={() => setCurrentView("dashboard")}
            onEventClick={(event) => alert(`Event clicked: ${event.title}`)}
          />
        );
      case "report":
        return (
          <CommissionReport
            sales={sales}
            onBack={() => setCurrentView("dashboard")}
            onGenerateReport={handleGenerateReport}
          />
        );
      default:
        return (
          <>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Account Executive Dashboard
            </h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-gray-800 mt-1">
                        {stat.value}
                      </p>
                    </div>
                    <div className="text-blue-500 text-2xl">{stat.icon}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Today's Demos
                </h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                  {todaysDemos.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                      {todaysDemos.map((demo, index) => (
                        <li key={index} className="py-3">
                          <div className="flex justify-between">
                            <div>
                              <p className="font-medium">{demo.prospectName}</p>
                              <p className="text-sm text-gray-600">
                                {demo.company}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm">{demo.time}</p>
                              <p className="text-xs text-gray-500 capitalize">
                                {demo.type} demo
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">
                      No demos scheduled for today.
                    </p>
                  )}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Quick Actions
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => handleViewChange("schedule")}
                    className="bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <FaCalendarAlt className="mr-2" />
                    Schedule Demo
                  </button>
                  <button
                    onClick={() => handleViewChange("record")}
                    className="bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center"
                  >
                    <FaDollarSign className="mr-2" />
                    Record Sale
                  </button>
                  <button
                    onClick={() => handleViewChange("calendar")}
                    className="bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center"
                  >
                    <FaCalendarAlt className="mr-2" />
                    View Calendar
                  </button>
                  <button
                    onClick={() => handleViewChange("report")}
                    className="bg-orange-600 text-white py-3 px-4 rounded-md hover:bg-orange-700 transition-colors flex items-center justify-center"
                  >
                    <FaChartLine className="mr-2" />
                    Commission Report
                  </button>
                </div>
              </div>
            </div>

            <PricingTable />
            <CommissionCalculator />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">{renderView()}</div>
    </div>
  );
}
