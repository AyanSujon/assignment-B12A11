
import React from "react";
import { MapPin, Users, Tag } from "lucide-react";
import { Link } from "react-router";

const EventsCard = ({ event }) => {
  const {
    title,
    description,
    eventDate,
    location,
    isPaid,
    eventFee,
    maxAttendees,
    createdAt,
    _id
  } = event;

  // Truncate description to 70 characters
  const shortDescription =
    description.length > 70 ? description.substring(0, 50) + "..." : description;

  // Format date
  const formattedDate = new Date(eventDate).toLocaleDateString();
  const formattedTime = new Date(eventDate).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // AM/PM format
  });

  return (
    <div className="card bg-base-100 shadow-xl rounded-xl overflow-hidden border border-gray-100 hover:shadow-2xl duration-300">
      {/* Content Body */}
      <div className="card-body">
        {/* Event Title */}
        <h2 className="card-title text-lg font-semibold">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {shortDescription}
        </p>

        {/* Event Date & Time */}
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-700">
          <Tag size={18} className="text-[#0b99ce]" />
          <span>{formattedDate}</span>
          <span className="mx-1">|</span>
          <span>{formattedTime}</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mt-1 text-sm text-gray-700">
          <MapPin size={18} className="text-[#fe3885]" />
          <span>{location}</span>
        </div>

        {/* Attendees & Fee */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Users size={18} className="text-gray-500" />
            {maxAttendees ? `${maxAttendees} Attendees` : "Open"}
          </div>

          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              isPaid ? "bg-blue-100 text-[#0b99ce]" : "bg-green-100 text-green-600"
            }`}
          >
            {isPaid ? `$${eventFee}` : "Free"}
          </span>
        </div>

        {/* Created At */}
        <p className="text-xs text-gray-400 mt-2">
          Created on: {new Date(createdAt).toLocaleDateString()}
        </p>

        {/* Button */}
        <div className="mt-3">
          <Link to={`/events/${_id}`} className="btn w-full bg-[#0b99ce] text-white hover:bg-[#fe3885] border-none">
            View Event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
