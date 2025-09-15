"use client";
import WindowWrapper from "@/components/WindowWrapper";

export default function Calendar() {
  const events = [
    { company: "GalaxEye", role: "Software Intern", date: "Dec 2022 – Jan 2023", color: "bg-purple-500" },
    { company: "Arka Aerospace", role: "Software Intern", date: "Jun 2023 – Oct 2023", color: "bg-green-500" },
    { company: "Genpact", role: "Software Intern", date: "Feb 2024 – Jul 2024", color: "bg-yellow-500" },
    { company: "OnlyC2C", role: "Intern", date: "Jan 2025 – Present", color: "bg-pink-500" },
    { company: "ITProFound", role: "Software Intern", date: "May 2025 – Jul 2025", color: "bg-blue-500" },
  ];

  return (
    <WindowWrapper title="📅 Internship Timeline" width="900px" height="auto">
      <div className="relative space-y-12 px-4 sm:px-6 md:px-8">
        {/* Middle Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>

        {events.map((event, i) => (
          <div
            key={i}
            className={`flex ${i % 2 === 0 ? "justify-start md:justify-start" : "justify-end md:justify-end"} relative`}
          >
            <div className="relative w-full md:w-5/12">
              {/* Dot (hidden on small screens) */}
              <div
                className={`hidden md:block absolute top-5 w-4 h-4 ${event.color} rounded-full border-2 border-white ${
                  i % 2 === 0 ? "right-[-32px]" : "left-[-32px]"
                }`}
              ></div>

              {/* Card */}
              <div className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 duration-200">
                <h3 className="text-lg font-semibold text-gray-900">{event.company}</h3>
                <p className="text-sm text-gray-600">{event.role}</p>
                <p className="text-xs text-gray-500">{event.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </WindowWrapper>
  );
}