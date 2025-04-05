import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Demos from "./pages/Demos";
import Commissions from "./pages/Commissions";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/demos" element={<Demos />} />
          <Route path="/commissions" element={<Commissions />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
