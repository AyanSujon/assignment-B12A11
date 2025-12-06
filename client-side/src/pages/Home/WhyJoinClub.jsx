// WhyJoinClub.jsx
import React from "react";
import { Users, BookOpen, Star, Activity } from "lucide-react"; // Lucide icons

const whyJoinData = [
  {
    id: 1,
    title: "Meet Like-Minded People",
    description: "Connect with people who share your interests and passions. Build friendships and network effortlessly.",
    icon: <Users className="w-12 h-12 text-[#0b99ce] mx-auto mb-4" />,
  },
  {
    id: 2,
    title: "Learn & Grow",
    description: "Participate in workshops, discussions, and events to expand your knowledge and skills.",
    icon: <BookOpen className="w-12 h-12 text-[#0b99ce] mx-auto mb-4" />,
  },
  {
    id: 3,
    title: "Exclusive Access",
    description: "Get special perks, early access to events, and member-only content curated for you.",
    icon: <Star className="w-12 h-12 text-[#0b99ce] mx-auto mb-4" />,
  },
  {
    id: 4,
    title: "Stay Active & Engaged",
    description: "Engage in exciting activities and community events that keep you motivated and inspired.",
    icon: <Activity className="w-12 h-12 text-[#0b99ce] mx-auto mb-4" />,
  },
];

const WhyJoinClub = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#0b99ce]">
          Why Join a Club?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyJoinData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-3 text-[#0b99ce]">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinClub;
