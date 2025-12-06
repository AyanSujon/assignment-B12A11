// // PopularCategories.jsx
// import React from "react";
// import { Camera, BookOpen, MapPin, Cpu, Music, Heart, Users, Globe } from "lucide-react";

// const categories = [
//   {
//     id: 1,
//     name: "Photography",
//     description: "Explore your creativity and capture stunning moments.",
//     icon: <Camera className="w-12 h-12 text-[#0b99ce] mx-auto mb-4" />,
//   },
//   {
//     id: 2,
//     name: "Book Clubs",
//     description: "Join discussions and expand your literary horizons.",
//     icon: <BookOpen className="w-12 h-12 text-[#0b99ce] mx-auto mb-4" />,
//   },
//   {
//     id: 3,
//     name: "Hiking & Adventure",
//     description: "Get active and explore the outdoors with fellow enthusiasts.",
//     icon: <MapPin className="w-12 h-12 text-[#0b99ce] mx-auto mb-4" />,
//   },
//   {
//     id: 4,
//     name: "Tech & Coding",
//     description: "Learn, share, and innovate in tech-related clubs.",
//     icon: <Cpu className="w-12 h-12 text-[#0b99ce] mx-auto mb-4" />,
//   },
//   {
//     id: 5,
//     name: "Music & Arts",
//     description: "Express yourself through music, art, and performance.",
//     icon: <Music className="w-12 h-12 text-[#0b99ce] mx-auto mb-4" />,
//   },
//   {
//     id: 6,
//     name: "Health & Fitness",
//     description: "Stay fit and motivated with wellness-focused clubs.",
//     icon: <Heart className="w-12 h-12 text-[#0b99ce] mx-auto mb-4" />,
//   },
//   {
//     id: 7,
//     name: "Social & Networking",
//     description: "Expand your network and meet interesting people.",
//     icon: <Users className="w-12 h-12 text-[#0b99ce] mx-auto mb-4" />,
//   },
//   {
//     id: 8,
//     name: "Travel & Culture",
//     description: "Discover new places, cultures, and travel experiences.",
//     icon: <Globe className="w-12 h-12 text-[#0b99ce] mx-auto mb-4" />,
//   },
// ];

// const PopularCategories = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12 text-[#0b99ce]">
//           Popular Categories
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {categories.map((category) => (
//             <div
//               key={category.id}
//               className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300"
//             >
//               {category.icon}
//               <h3 className="text-xl font-semibold mb-3 text-[#0b99ce]">
//                 {category.name}
//               </h3>
//               <p className="text-gray-600">{category.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PopularCategories;










// PopularCategories.jsx
import React from "react";
import { Camera, BookOpen, MapPin, Cpu, Music, Heart, Users, Globe } from "lucide-react";
import Container from "../../components/shared/Container";

const categories = [
  { id: 1, name: "Photography", description: "Explore your creativity and capture stunning moments.", icon: <Camera className="w-12 h-12 text-[#0b99ce] mx-auto mb-4" /> },
  { id: 2, name: "Book Clubs", description: "Join discussions and expand your literary horizons.", icon: <BookOpen className="w-12 h-12 text-[#0b99ce] mx-auto mb-4" /> },
  { id: 3, name: "Hiking & Adventure", description: "Get active and explore the outdoors with fellow enthusiasts.", icon: <MapPin className="w-12 h-12 text-[#0b99ce] mx-auto mb-4" /> },
  { id: 4, name: "Tech & Coding", description: "Learn, share, and innovate in tech-related clubs.", icon: <Cpu className="w-12 h-12 text-[#0b99ce] mx-auto mb-4" /> },
  { id: 5, name: "Music & Arts", description: "Express yourself through music, art, and performance.", icon: <Music className="w-12 h-12 text-[#0b99ce] mx-auto mb-4" /> },
  { id: 6, name: "Health & Fitness", description: "Stay fit and motivated with wellness-focused clubs.", icon: <Heart className="w-12 h-12 text-[#0b99ce] mx-auto mb-4" /> },
  { id: 7, name: "Social & Networking", description: "Expand your network and meet interesting people.", icon: <Users className="w-12 h-12 text-[#0b99ce] mx-auto mb-4" /> },
  { id: 8, name: "Travel & Culture", description: "Discover new places, cultures, and travel experiences.", icon: <Globe className="w-12 h-12 text-[#0b99ce] mx-auto mb-4" /> },
];

const PopularCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12 text-[#0b99ce]">
          Popular Categories
        </h2>

        {/* Scrollable Container */}
        <div className="overflow-x-auto scroll-smooth hover:pause-scroll py-5">
          <div className="flex gap-8 min-w-max">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300 max-w-[250px]"
              >
                {category.icon}
                <h3 className="text-xl font-semibold mb-3 text-[#0b99ce]">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PopularCategories;
