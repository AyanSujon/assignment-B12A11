// EventsDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router";   // ⬅ added navigate
import useEvents from "../../hooks/useEvents";
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaMoneyBill, FaArrowLeft } from "react-icons/fa"; // ⬅ added icon
import { MdAccessTime } from "react-icons/md";
import toast from "react-hot-toast";
import Container from "../../components/shared/Container";

const EventsDetails = () => {
  const { id } = useParams();
  const { events, isLoading, isError } = useEvents();
  const navigate = useNavigate(); // ⬅ back button navigator

  // Loading state
  if (isLoading) {
    return (
      <div className="w-full py-20 flex justify-center">
        <span className="loading loading-spinner loading-lg text-[#0b99ce]"></span>
      </div>
    );
  }

  // Error state
  if (isError) {
    toast.error("Failed to load event details!");
    return (
      <div className="text-center py-10 text-red-500 font-semibold">
        Failed to load event details.
      </div>
    );
  }

  // Find specific event
  const event = events?.find((e) => e._id === id);

  if (!event) {
    return (
      <div className="text-center py-10 text-red-500 font-semibold">
        Event not found!
      </div>
    );
  }

  return (
    <Container>
      <div className="my-10">

        {/* BACK BUTTON --- added only this section */}
        <button
          onClick={() => navigate(-1)}
          className=" btn mb-5 flex items-center gap-2 text-white"
          style={{ backgroundColor: "#0b99ce" }}
        >
          <FaArrowLeft /> Back
        </button>

        <div className="py-10">
          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#0b99ce]">
            {event.title}
          </h1>

          {/* CREATED AT */}
          <p className="text-gray-500 text-sm flex items-center gap-2 mb-6">
            <MdAccessTime /> Created At: {new Date(event.createdAt).toLocaleDateString()}
          </p>

          {/* DETAILS CARD */}
          <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-xl p-6">

            {/* GRID INFO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Date */}
              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                <FaCalendarAlt className="text-[#0b99ce] text-xl" />
                <div>
                  <h3 className="font-semibold">Event Date</h3>
                  <p>{new Date(event.eventDate).toLocaleDateString()}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                <FaMapMarkerAlt className="text-[#0b99ce] text-xl" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p>{event.location}</p>
                </div>
              </div>

              {/* Attendees */}
              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                <FaUsers className="text-[#0b99ce] text-xl" />
                <div>
                  <h3 className="font-semibold">Attendees</h3>
                  <p>{event.maxAttendees || "Unlimited"}</p>
                </div>
              </div>

              {/* Fee */}
              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                <FaMoneyBill className="text-[#fe3885] text-xl" />
                <div>
                  <h3 className="font-semibold">Event Fee</h3>
                  <p>
                    {event.isPaid ? (
                      <span className="text-[#fe3885] font-semibold">${event.eventFee}</span>
                    ) : (
                      "Free Event"
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Register Button */}
            <div className="mt-8 text-center">
              <button
                onClick={() => toast.success("Successfully registered for the event!")}
                className="btn px-8 text-white shadow-md"
                style={{ backgroundColor: "#0b99ce" }}
              >
                Register Now
              </button>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="py-10 my-10 bg-white p-6 shadow-md rounded-xl border-l-4 border-[#0b99ce]">
          <h2 className="text-xl font-bold mb-3 text-[#0b99ce]">Description</h2>
          <p className="text-gray-700 leading-relaxed">{event.description}</p>
        </div>
      </div>

    </Container>
  );
};

export default EventsDetails;
