// import React from 'react';
// import { useNavigate, useParams } from 'react-router';

// const ClubsDetails = () => {
//       const { id } = useParams();
//        const navigate = useNavigate();
//     return (
//         <div>
//             ClubsDetails {console.log(id)}
//         </div>
//     );
// };

// export default ClubsDetails;


import React from "react";
import { useNavigate, useParams } from "react-router";
import {
  FaUsers,
  FaMapMarkerAlt,
  FaMoneyBill,
  FaEnvelope,
  FaCalendarPlus,
  FaCalendarCheck,
} from "react-icons/fa";
import { MdCategory, MdArrowBack } from "react-icons/md";
import { toast } from "react-hot-toast";
import useClubs from "../../hooks/useClubs";
import Container from "../../components/shared/Container";

const ClubsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { clubs = [], isLoading, isError } = useClubs();

  // Loading State
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-xl font-semibold text-[#0b99ce]">
        Loading club details...
      </div>
    );
  }

  // Error State
  if (isError) {
    toast.error("Failed to load club details.");
    return (
      <div className="flex justify-center items-center h-[60vh] text-xl font-semibold text-red-500">
        Something went wrong.
      </div>
    );
  }

  // Find Single Club by ID
  const club = clubs.find((c) => c._id === id);

  if (!club) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-xl font-semibold text-red-500">
        Club not found.
      </div>
    );
  }




 const handleJoinClub = (id) => {
    console.log(id)
    if (club.membershipFee === 0) {
      toast.success("You have successfully joined this club!");
    } else {
      toast.success("Redirecting to payment...");
    }
  };









  return (
    <Container>
      <div className="py-10">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 px-4 py-2 bg-[#0b99ce] text-white rounded-lg shadow hover:bg-[#097aa5] transition"
        >
          <MdArrowBack />
          Back
        </button>

        {/* Banner Image */}
        <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg mb-6">
          <img
            src={club.bannerImage}
            alt={club.clubName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Club Name */}
        <h1 className="text-3xl font-bold mb-6 text-[#0b99ce]">
          {club.clubName}
        </h1>

        {/* 2-Column Layout */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {/* Column 1 */}
          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <MdCategory className="text-[#fe3885] text-xl" />
              <p className="font-semibold">
                Category:{" "}
                <span className="font-normal">{club.category}</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#fe3885] text-xl" />
              <p className="font-semibold">
                Location:{" "}
                <span className="font-normal">{club.location}</span>
              </p>
            </div>

            <p className="font-semibold flex items-center gap-3">
              <FaCalendarPlus className="text-[#fe3885] text-xl" />
              Created At:
              <span className="font-normal">
                {new Date(club.createdAt).toLocaleDateString()}
              </span>
            </p>

            <p className="font-semibold flex items-center gap-3">
              <FaCalendarCheck className="text-[#fe3885] text-xl" />
              Updated At:
              <span className="font-normal">
                {new Date(club.updatedAt).toLocaleDateString()}
              </span>
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <FaUsers className="text-[#fe3885] text-xl" />
              <p className="font-semibold">
                Members:{" "}
                <span className="font-normal">{club.membersCount}</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaMoneyBill className="text-[#fe3885] text-xl" />
              <p className="font-semibold">
                Membership Fee:{" "}
                <span className="font-normal">
                  {club.membershipFee === 0
                    ? "Free"
                    : `$${club.membershipFee.toFixed(2)}`}
                </span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#fe3885] text-xl" />
              <p className="font-semibold">
                Manager Email:{" "}
                <span className="font-normal">{club.managerEmail}</span>
              </p>
            </div>

            {/* Join Club Button */}
            <button
              onClick={() => handleJoinClub(club._id)}
              className="w-fit px-5 py-2 bg-[#fe3885] text-white rounded-lg shadow hover:bg-[#d72b6d] transition mt-3"
            >
              Join Club
            </button>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-white p-6 shadow-md rounded-xl border-l-4 border-[#0b99ce]">
          <h2 className="text-xl font-bold mb-3 text-[#0b99ce]">Description</h2>
          <p className="text-gray-700 leading-relaxed">{club.description}</p>
        </div>

      </div>
    </Container>
  );
};

export default ClubsDetails;
