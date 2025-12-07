import React from "react";
import { MapPin, Users, Tag } from "lucide-react";

const ClubsCard = ({ club }) => {
  const {
    clubName,
    description,
    category,
    location,
    bannerImage,
    membersCount,
    membershipFee,
    status,
    createdAt,
  } = club;

  const statusColor =
    status === "approved"
      ? "bg-green-100 text-green-600"
      : status === "pending"
      ? "bg-yellow-100 text-yellow-600"
      : "bg-red-100 text-red-600";

  return (
    <div className="card bg-base-100 shadow-xl rounded-xl overflow-hidden border border-gray-100 hover:shadow-2xl duration-300">
      {/* Banner Image */}
      <figure>
        <img
          src={bannerImage}
          alt={clubName}
          className="w-full h-48 object-cover"
        />
      </figure>

      {/* Content Body */}
      <div className="card-body ">
        {/* Club Name + Status */}
        <div className="flex items-center justify-between">
          <h2 className="card-title text-lg font-semibold">{clubName}</h2>
          {/* <span className={`badge ${statusColor} border-none`}>
            {status}
          </span> */}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Category */}
        <div className="flex items-center gap-2">
          <Tag size={18} className="text-[#0b99ce]" />
          <span className="text-sm font-medium">{category}</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-[#fe3885]" />
          <span className="text-sm">{location}</span>
        </div>

        {/* Members & Fee */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Users size={18} className="text-gray-500" />
            {membersCount} Members
          </div>

          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              membershipFee === 0
                ? "bg-green-100 text-green-600"
                : "bg-blue-100 text-[#0b99ce]"
            }`}
          >
            {membershipFee === 0 ? "Free" : `$${membershipFee}`}
          </span>
        </div>

        {/* Created At */}
        <p className="text-xs text-gray-400">
          Created on: {new Date(createdAt).toLocaleDateString()}
        </p>

        {/* Button */}
        <div className="mt-3">
          <button className="btn w-full bg-[#0b99ce] text-white hover:bg-[#fe3885] border-none">
            View Club
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClubsCard;
