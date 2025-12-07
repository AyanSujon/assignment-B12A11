// Events.jsx
import React, { useState, useMemo } from "react";
import { FaMapMarkerAlt, FaMoneyBillAlt, FaUsers, FaCalendarAlt } from "react-icons/fa";
import useEvents from "../../hooks/useEvents";
import EventsCard from "./EventsCard";
import Container from "../../components/shared/Container";

export default function Events() {
  const { events = [], isLoading, isError } = useEvents();

  // ------------------------
  // Filter States
  // ------------------------
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [maxAttendees, setMaxAttendees] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [eventFee, setEventFee] = useState("");

  // ------------------------
  // Pagination States
  // ------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6; // show 6 cards per page

  // Clear Filters Function
  const clearFilters = () => {
    setSearch("");
    setLocation("");
    setMaxAttendees("");
    setEventDate("");
    setCreatedAt("");
    setEventFee("");
    setCurrentPage(1);
  };

  // ------------------------
  // Filters Apply Logic
  // ------------------------
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      if (search && !event.title.toLowerCase().includes(search.toLowerCase())) return false;
      if (location && !event.location.toLowerCase().includes(location.toLowerCase())) return false;

      if (eventFee === "free" && event.isPaid) return false;
      if (eventFee === "paid" && !event.isPaid) return false;

      if (maxAttendees && event.maxAttendees < parseInt(maxAttendees)) return false;

      if (eventDate && new Date(event.eventDate) < new Date(eventDate)) return false;
      if (createdAt && new Date(event.createdAt) < new Date(createdAt)) return false;

      return true;
    });
  }, [events, search, location, maxAttendees, eventDate, createdAt, eventFee]);

  if (isLoading) return <div className="text-center py-20">Loading...</div>;
  if (isError) return <div className="text-center py-20 text-red-500">Something went wrong!</div>;

  // ------------------------
  // Pagination Logic
  // ------------------------
  const totalPages = Math.ceil(filteredEvents.length / cardsPerPage);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const maxButtons = 3;
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = startPage + maxButtons - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <Container>
          <div className="drawer lg:drawer-open">
      <input id="events-filter-drawer" type="checkbox" className="drawer-toggle" />

      {/* PAGE CONTENT */}
      <div className="drawer-content px-2 md:px-3 lg:px-4 py-14">

        {/* Mobile Button */}
        <div className="lg:hidden mb-4">
          <label htmlFor="events-filter-drawer" className="btn bg-[#0b99ce] text-white">
            Filters
          </label>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-[#0b99ce] mb-4">All Events</h1>
          <p className="text-gray-600">Filter and explore events happening in local clubs.</p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {paginatedEvents.map((event) => (
            <EventsCard key={event._id} event={event} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            <button
              className="btn btn-sm bg-[#0b99ce] text-white disabled:bg-gray-300"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {getPageNumbers().map((page) => (
              <button
                key={page}
                className={`btn btn-sm ${
                  page === currentPage
                    ? "bg-[#fe3885] text-white"
                    : "bg-white text-[#0b99ce] border"
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}

            <button
              className="btn btn-sm bg-[#0b99ce] text-white disabled:bg-gray-300"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* SIDEBAR FILTER */}
      <div className="drawer-side">
        <label htmlFor="events-filter-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

        <ul className="menu bg-base-200 min-h-full w-64 p-4 space-y-4 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4 text-[#0b99ce]">Filters</h2>

            {/* Search */}
            <li>
              <label className="font-semibold">Search</label>
              <input
                type="text"
                placeholder="Event title"
                className="input input-bordered"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </li>

            {/* Location */}
            <li>
              <label className="font-semibold">Location</label>
              <input
                type="text"
                placeholder="City"
                className="input input-bordered"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </li>

            {/* Max Attendees */}
            <li>
              <label className="font-semibold">Minimum Attendees</label>
              <input
                type="number"
                className="input input-bordered"
                placeholder="e.g., 50"
                value={maxAttendees}
                onChange={(e) => setMaxAttendees(e.target.value)}
              />
            </li>

            {/* Event Date */}
            <li>
              <label className="font-semibold">Event After</label>
              <input
                type="date"
                className="input input-bordered"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
            </li>

            {/* Created Date */}
            <li>
              <label className="font-semibold">Created After</label>
              <input
                type="date"
                className="input input-bordered"
                value={createdAt}
                onChange={(e) => setCreatedAt(e.target.value)}
              />
            </li>

            {/* Event Fee */}
            <li>
              <label className="font-semibold">Event Fee</label>
              <select
                className="select select-bordered"
                value={eventFee}
                onChange={(e) => setEventFee(e.target.value)}
              >
                <option value="">All</option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </select>
            </li>
          </div>

          {/* Clear Filters Button */}
          <button
            onClick={clearFilters}
            className="btn bg-[#fe3885] text-white w-full mt-4"
          >
            Clear Filters
          </button>
        </ul>
      </div>
    </div>
    </Container>
  );
}
