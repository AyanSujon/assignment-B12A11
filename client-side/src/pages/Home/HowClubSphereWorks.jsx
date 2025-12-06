import React from "react";
import { UserPlus, Users, CalendarDays, ShieldCheck } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discover Local Clubs",
    desc: "Browse photography, hiking, tech, book, and other community clubs near you. ClubSphere helps people connect with like-minded groups effortlessly.",
    icon: <Users className="w-10 h-10 text-primary" />,
  },
  {
    id: 2,
    title: "Join Clubs Easily",
    desc: "Become a member of free or paid clubs instantly. Complete your profile, choose your interests, and join communities you resonate with.",
    icon: <UserPlus className="w-10 h-10 text-secondary" />,
  },
  {
    id: 3,
    title: "Attend Events",
    desc: "Register for club events, workshops, meetups, and training sessions. Event managers can plan and publish events with full control.",
    icon: <CalendarDays className="w-10 h-10 text-primary" />,
  },
  {
    id: 4,
    title: "Managed With Admin Oversight",
    desc: "Admins monitor clubs, users, membership payments, and event activities to ensure a smooth and secure platform experience.",
    icon: <ShieldCheck className="w-10 h-10 text-secondary" />,
  },
];

const HowClubSphereWorks = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-primary mb-3">
            How ClubSphere Works
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            ClubSphere brings together community clubs, event management,
            and member engagement into one smooth and powerful experience.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="card bg-white shadow-xl p-6 rounded-2xl border border-gray-200 hover:shadow-2xl transition duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowClubSphereWorks;
