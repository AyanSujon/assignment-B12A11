// UpcomingEvents.jsx
import React from "react";

// Sample data for events
const events = [
  {
    id: 1,
    title: "Photography Club Meetup",
    date: "2025-12-15",
    time: "4:00 PM - 6:00 PM",
    location: "Central Park, NYC",
    description: "Join fellow photography enthusiasts for a fun outdoor photo session.",
  },
  {
    id: 2,
    title: "Hiking Adventure",
    date: "2025-12-20",
    time: "8:00 AM - 2:00 PM",
    location: "Blue Mountain Trails",
    description: "A thrilling day hike. All skill levels welcome. Pack your lunch!",
  },
  {
    id: 3,
    title: "Book Club Discussion",
    date: "2025-12-22",
    time: "6:30 PM - 8:00 PM",
    location: "Downtown Library",
    description: "Discussing 'The Great Gatsby' with fellow book lovers.",
  },
  {
    id: 4,
    title: "Tech Workshop",
    date: "2025-12-28",
    time: "10:00 AM - 1:00 PM",
    location: "Innovation Hub",
    description: "Hands-on coding workshop for beginners. Bring your laptop!",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-3xl font-bold text-[#0b99ce] mb-6 text-center">
          Upcoming Events
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold text-[#0b99ce] mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Date:</span> {event.date}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Time:</span> {event.time}
                </p>
                <p className="text-gray-600 mb-3">
                  <span className="font-medium">Location:</span> {event.location}
                </p>
                <p className="text-gray-700">{event.description}</p>
              </div>
              <button
                className="mt-4 w-full bg-[#0b99ce] hover:bg-[#fe3885] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
