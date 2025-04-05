import { useState } from "react";
import DemoCard from "../components/DemoCard";

export default function Demos() {
  // Mock data - in a real app this would come from an API
  const [demos, setDemos] = useState([
    {
      id: 1,
      prospectName: "John Smith",
      company: "Acme Inc",
      date: "2023-06-15",
      time: "10:00 AM",
      contact: "john@acme.com",
      interestLevel: "High",
      status: "scheduled",
    },
    {
      id: 2,
      prospectName: "Sarah Johnson",
      company: "TechCorp",
      date: "2023-06-16",
      time: "2:30 PM",
      contact: "sarah@techcorp.com",
      interestLevel: "Medium",
      status: "scheduled",
    },
    {
      id: 3,
      prospectName: "Michael Brown",
      company: "Innovate LLC",
      date: "2023-06-10",
      time: "11:00 AM",
      contact: "michael@innovate.com",
      interestLevel: "High",
      status: "completed",
    },
  ]);

  const handleCloseDemo = (id, status) => {
    setDemos(
      demos.map((demo) => (demo.id === id ? { ...demo, status } : demo))
    );
  };

  const upcomingDemos = demos.filter((demo) => demo.status === "scheduled");
  const completedDemos = demos.filter((demo) => demo.status === "completed");

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Demo Management</h1>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Demos</h2>
        {upcomingDemos.length > 0 ? (
          upcomingDemos.map((demo) => (
            <DemoCard key={demo.id} demo={demo} onClose={handleCloseDemo} />
          ))
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600">No upcoming demos scheduled.</p>
          </div>
        )}
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Completed Demos
        </h2>
        {completedDemos.length > 0 ? (
          completedDemos.map((demo) => (
            <DemoCard key={demo.id} demo={demo} onClose={handleCloseDemo} />
          ))
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600">No completed demos yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
