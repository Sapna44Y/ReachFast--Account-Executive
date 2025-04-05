import { FaArrowLeft } from "react-icons/fa";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function CalendarView({ events, onBack, onEventClick }) {
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
        <h2 className="text-xl font-bold text-gray-800">Your Calendar</h2>
        <div></div> {/* Empty div for spacing */}
      </div>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events.map((event) => ({
          id: event.id,
          title: event.title,
          start: new Date(event.start),
          end: new Date(event.end),
          backgroundColor: event.type === "demo" ? "#3b82f6" : "#10b981",
          borderColor: event.type === "demo" ? "#2563eb" : "#059669",
        }))}
        eventClick={(info) => onEventClick(info.event)}
        height="auto"
      />
    </div>
  );
}
