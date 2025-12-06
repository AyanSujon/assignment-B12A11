// // FeaturedClubs.jsx
// import React from "react";
// import Container from "../../components/shared/Container";
// import useClubs from "../../hooks/useClubs";

// // Sample JSON data
// const clubs = [
//     {
//         clubName: "Urban Cycling Club",
//         description:
//             "Promoting cycling in the city with weekly rides, workshops, and events.",
//         category: "Sports",
//         location: "Chicago, IL",
//         bannerImage: "https://example.com/images/cycling_club.jpg",
//         managerEmail: "frank@example.com",
//     },
//     {
//         clubName: "City Photography Club",
//         description:
//             "A club for photography enthusiasts to learn, share, and showcase their work.",
//         category: "Photography",
//         location: "New York, NY",
//         bannerImage: "https://example.com/images/photography_club.jpg",
//         managerEmail: "alice@example.com",
//     },
//     {
//         clubName: "Mountain Hikers Association",
//         description:
//             "Join fellow hikers for outdoor adventures and mountaineering experiences.",
//         category: "Sports",
//         location: "Pennsylvania, PA",
//         bannerImage: "https://example.com/images/hiking_club.jpg",
//         managerEmail: "bob@example.com",
//     },
//     {
//         clubName: "Tech Innovators Hub",
//         description:
//             "Networking and workshops for tech enthusiasts, startups, and innovators.",
//         category: "Tech",
//         location: "San Francisco, CA",
//         bannerImage: "https://example.com/images/tech_club.jpg",
//         managerEmail: "david@example.com",
//     }
// ];

// const FeaturedClubs = () => {


//     const { clubs, isLoading, isError } = useClubs({ category: 'Photography' });

//     if (isLoading) return <p>Loading clubs...</p>;
//     if (isError) return <p>Failed to load clubs.</p>;











//     return (
//         <section className="py-10 bg-gray-50">
//             <Container>
//                 <div >
//                     <h2 className="text-3xl font-bold text-center mb-8">Featured Clubs</h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                         {clubs.map((club, index) => (
//                             <div
//                                 key={index}
//                                 className="card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//                             >
//                                 <figure>
//                                     <img
//                                         src={club.bannerImage}
//                                         alt={club.clubName}
//                                         className="h-48 w-full object-cover"
//                                     />
//                                 </figure>
//                                 <div className="card-body">
//                                     <h3 className="card-title text-xl font-semibold">
//                                         {club.clubName}
//                                     </h3>
//                                     <p className="text-gray-600">{club.description}</p>
//                                     <div className="mt-3 flex flex-wrap gap-2 text-sm">
//                                         <span className="badge rounded px-2 py-1 bg-secondary text-white">
//                                             {club.category}
//                                         </span>
//                                         <span className="badge rounded px-2 py-1 bg-gray-300 text-gray-600">
//                                             {club.location}
//                                         </span>
//                                     </div>
//                                     <div className="card-actions mt-4">
//                                         <button className="btn btn-primary w-full hover:btn-secondary">
//                                             View Club
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </Container>
//         </section>
//     );
// };

// export default FeaturedClubs;




















import React from "react";
import Container from "../../components/shared/Container";
import useClubs from "../../hooks/useClubs";

const FeaturedClubs = () => {
    // Fetch only the 4 most recent clubs
    const { clubs = [], isLoading, isError } = useClubs();

    if (isLoading) return <p className="text-center py-10">Loading clubs...</p>;
    if (isError) return <p className="text-center py-10 text-red-500">Failed to load clubs.</p>;

    // Limit to 4 clubs for featured section
    const featuredClubs = clubs.slice(0, 6);

    return (
        <section className="py-10 bg-gray-50">
            <Container>
                <h2 className="text-3xl font-bold text-center mb-8">Featured Clubs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredClubs.map((club) => (
                        <div
                            key={club._id}
                            className="card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <figure>
                                <img
                                    src={club.bannerImage}
                                    alt={club.clubName}
                                    className="h-48 w-full object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title text-xl font-semibold">
                                    {club.clubName}
                                </h3>
                                <p className="text-gray-600">{club.description}</p>
                                <div className="mt-3 flex flex-wrap gap-2 text-sm">
                                    <span className="badge rounded px-2 py-1 bg-primary text-white">
                                        {club.category}
                                    </span>
                                    <span className="badge rounded px-2 py-1 bg-gray-300 text-gray-600">
                                        {club.location}
                                    </span>
                                </div>
                                <div className="card-actions mt-4">
                                    <button className="btn btn-primary w-full hover:bg-secondary">
                                        View Club
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default FeaturedClubs;
