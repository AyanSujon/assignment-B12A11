
// import React, { useState, useMemo } from "react";
// import { FaMapMarkerAlt, FaUsers } from "react-icons/fa";
// import { MdCategory } from "react-icons/md";
// import useClubs from "../../hooks/useClubs";
// import ClubsCard from "./ClubsCard";

// export default function Clubs() {
//   const { clubs = [], isLoading, isError } = useClubs();

//   // ------------------------
//   // Filter States
//   // ------------------------
//   const [category, setCategory] = useState("");
//   const [location, setLocation] = useState("");
//   const [membershipFee, setMembershipFee] = useState("");
//   const [minMembers, setMinMembers] = useState("");
//   const [createdAt, setCreatedAt] = useState("");
//   const [updatedAt, setUpdatedAt] = useState("");

//   // Clear Filters Function
//   const clearFilters = () => {
//     setCategory("");
//     setLocation("");
//     setMembershipFee("");
//     setMinMembers("");
//     setCreatedAt("");
//     setUpdatedAt("");
//   };

//   // ------------------------
//   // Filters Apply Logic
//   // ------------------------
//   const filteredClubs = useMemo(() => {
//     return clubs.filter((club) => {
//       if (category && club.category !== category) return false;
//       if (location && !club.location.toLowerCase().includes(location.toLowerCase()))
//         return false;

//       if (membershipFee === "free" && club.membershipFee !== 0) return false;
//       if (membershipFee === "paid" && club.membershipFee === 0) return false;

//       if (minMembers && club.membersCount < parseInt(minMembers)) return false;

//       if (createdAt && new Date(club.createdAt) < new Date(createdAt)) return false;
//       if (updatedAt && new Date(club.updatedAt) < new Date(updatedAt)) return false;

//       return true;
//     });
//   }, [clubs, category, location, membershipFee, minMembers, createdAt, updatedAt]);

//   if (isLoading) return <div className="text-center py-20">Loading...</div>;
//   if (isError) return <div className="text-center py-20 text-red-500">Something went wrong!</div>;

//   const categories = [...new Set(clubs.map((c) => c.category))];

//   return (
//     <div className="drawer lg:drawer-open">
//       <input id="clubs-filter-drawer" type="checkbox" className="drawer-toggle" />

//       {/* PAGE CONTENT */}
//       <div className="drawer-content px-4 md:px-10 lg:px-20 py-14">

//         {/* Mobile Button */}
//         <div className="lg:hidden mb-4">
//           <label htmlFor="clubs-filter-drawer" className="btn bg-[#0b99ce] text-white">
//             Filters
//           </label>
//         </div>

//         <div className="text-center max-w-2xl mx-auto mb-12">
//           <h1 className="text-4xl font-bold text-[#0b99ce] mb-4">Explore All Clubs</h1>
//           <p className="text-gray-600">Use the filters to discover clubs that match your interests.</p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {filteredClubs.map((club) => (
//             <ClubsCard key={club._id} club={club}></ClubsCard>
//           ))}
//         </div>
//       </div>

//       {/* SIDEBAR FILTER */}
//       <div className="drawer-side">
//         <label htmlFor="clubs-filter-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

//         {/* ↓ ONLY CHANGE: Reduced width from w-80 → w-64, added flex column */}
//         <ul className="menu bg-base-200 min-h-full w-64 p-4 space-y-4 flex flex-col justify-between">

//           <div>
//             <h2 className="text-xl font-bold mb-4 text-[#0b99ce]">Filters</h2>

//             {/* Category */}
//             <li>
//               <label className="font-semibold">Category</label>
//               <select
//                 className="select select-bordered"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               >
//                 <option value="">All Categories</option>
//                 {categories.map((cat, idx) => (
//                   <option key={idx} value={cat}>{cat}</option>
//                 ))}
//               </select>
//             </li>

//             {/* Location */}
//             <li>
//               <label className="font-semibold">Location</label>
//               <input
//                 type="text"
//                 placeholder="Enter city"
//                 className="input input-bordered"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//               />
//             </li>

//             {/* Membership Fee */}
//             <li>
//               <label className="font-semibold">Membership Fee</label>
//               <select
//                 className="select select-bordered"
//                 value={membershipFee}
//                 onChange={(e) => setMembershipFee(e.target.value)}
//               >
//                 <option value="">All</option>
//                 <option value="free">Free</option>
//                 <option value="paid">Paid</option>
//               </select>
//             </li>

//             {/* Min Members */}
//             <li>
//               <label className="font-semibold">Minimum Members</label>
//               <input
//                 type="number"
//                 className="input input-bordered"
//                 placeholder="e.g., 100"
//                 value={minMembers}
//                 onChange={(e) => setMinMembers(e.target.value)}
//               />
//             </li>

//             {/* Created Date */}
//             <li>
//               <label className="font-semibold">Created After</label>
//               <input
//                 type="date"
//                 className="input input-bordered"
//                 value={createdAt}
//                 onChange={(e) => setCreatedAt(e.target.value)}
//               />
//             </li>

//             {/* Updated Date */}
//             <li>
//               <label className="font-semibold">Updated After</label>
//               <input
//                 type="date"
//                 className="input input-bordered"
//                 value={updatedAt}
//                 onChange={(e) => setUpdatedAt(e.target.value)}
//               />
//             </li>
//           </div>

//           {/* ↓ NEW: CLEAR FILTER BUTTON */}
//           <button
//             onClick={clearFilters}
//             className="btn bg-[#fe3885] text-white w-full mt-4"
//           >
//             Clear Filters
//           </button>
//         </ul>
//       </div>
//     </div>
//   );
// }











import React, { useState, useMemo } from "react";
import useClubs from "../../hooks/useClubs";
import ClubsCard from "./ClubsCard";

export default function Clubs() {
  const { clubs = [], isLoading, isError } = useClubs();

  // ------------------------
  // Filter States
  // ------------------------
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [membershipFee, setMembershipFee] = useState("");
  const [minMembers, setMinMembers] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

  // ------------------------
  // Pagination States
  // ------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 2; // <-- show 2 cards per page

  // Clear Filters Function
  const clearFilters = () => {
    setCategory("");
    setLocation("");
    setMembershipFee("");
    setMinMembers("");
    setCreatedAt("");
    setUpdatedAt("");
    setCurrentPage(1);
  };
  

  // ------------------------
  // Filters Apply Logic
  // ------------------------
  const filteredClubs = useMemo(() => {
    return clubs.filter((club) => {
      if (category && club.category !== category) return false;
      if (location && !club.location.toLowerCase().includes(location.toLowerCase()))
        return false;

      if (membershipFee === "free" && club.membershipFee !== 0) return false;
      if (membershipFee === "paid" && club.membershipFee === 0) return false;

      if (minMembers && club.membersCount < parseInt(minMembers)) return false;

      if (createdAt && new Date(club.createdAt) < new Date(createdAt)) return false;
      if (updatedAt && new Date(club.updatedAt) < new Date(updatedAt)) return false;

      return true;
    });
  }, [clubs, category, location, membershipFee, minMembers, createdAt, updatedAt]);

  if (isLoading) return <div className="text-center py-20">Loading...</div>;
  if (isError) return <div className="text-center py-20 text-red-500">Something went wrong!</div>;

  const categories = [...new Set(clubs.map((c) => c.category))];

  // ------------------------
  // Pagination Logic
  // ------------------------
  const totalPages = Math.ceil(filteredClubs.length / cardsPerPage);
  const paginatedClubs = filteredClubs.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Get dynamic page numbers for max 5 buttons
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
    <div className="drawer lg:drawer-open">
      <input id="clubs-filter-drawer" type="checkbox" className="drawer-toggle" />

      {/* PAGE CONTENT */}
      <div className="drawer-content px-4 md:px-10 lg:px-20 py-14">

        {/* Mobile Button */}
        <div className="lg:hidden mb-4">
          <label htmlFor="clubs-filter-drawer" className="btn bg-[#0b99ce] text-white">
            Filters
          </label>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-[#0b99ce] mb-4">Explore All Clubs</h1>
          <p className="text-gray-600">Use the filters to discover clubs that match your interests.</p>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {paginatedClubs.map((club) => (
            <ClubsCard key={club._id} club={club}></ClubsCard>
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
        <label htmlFor="clubs-filter-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

        <ul className="menu bg-base-200 min-h-full w-64 p-4 space-y-4 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4 text-[#0b99ce]">Filters</h2>

            {/* Category */}
            <li>
              <label className="font-semibold">Category</label>
              <select
                className="select select-bordered"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </li>

            {/* Location */}
            <li>
              <label className="font-semibold">Location</label>
              <input
                type="text"
                placeholder="Enter city"
                className="input input-bordered"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </li>

            {/* Membership Fee */}
            <li>
              <label className="font-semibold">Membership Fee</label>
              <select
                className="select select-bordered"
                value={membershipFee}
                onChange={(e) => setMembershipFee(e.target.value)}
              >
                <option value="">All</option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </select>
            </li>

            {/* Minimum Members */}
            <li>
              <label className="font-semibold">Minimum Members</label>
              <input
                type="number"
                className="input input-bordered"
                placeholder="e.g., 100"
                value={minMembers}
                onChange={(e) => setMinMembers(e.target.value)}
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

            {/* Updated Date */}
            <li>
              <label className="font-semibold">Updated After</label>
              <input
                type="date"
                className="input input-bordered"
                value={updatedAt}
                onChange={(e) => setUpdatedAt(e.target.value)}
              />
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
  );
}
