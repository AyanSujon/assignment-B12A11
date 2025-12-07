// Pricing.jsx
import React from "react";
import Container from "../../components/shared/Container";
import { FiCheck } from "react-icons/fi";

const pricingPlans = [
    {
        id: 1,
        name: "Free",
        price: "$0",
        description: "Perfect to explore clubs and join free events.",
        features: [
            "Join limited clubs",
            "Access free events",
            "Community support"
        ],
        buttonText: "Get Started",
        popular: false,
    },
    {
        id: 2,
        name: "Standard",
        price: "$9.99/mo",
        description: "Ideal for active members participating in paid events.",
        features: [
            "Join unlimited clubs",
            "Register for paid events",
            "Priority support",
            "Access to premium content"
        ],
        buttonText: "Subscribe",
        popular: true,
    },
    {
        id: 3,
        name: "Premium",
        price: "$19.99/mo",
        description: "Best for club managers or power members.",
        features: [
            "All Standard features",
            "Manage your own clubs",
            "Exclusive events & workshops",
            "Dedicated support"
        ],
        buttonText: "Go Premium",
        popular: false,
    },
];

const Pricing = () => {
    return (
        <section className="py-16 bg-gray-50">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#0b99ce] mb-4">Membership Plans</h2>
                    <p className="text-gray-600">Choose the plan that fits you best and start exploring clubs today!</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`overflow-hidden relative p-8 rounded-2xl shadow-lg border ${plan.popular ? "border-[#0b99ce]" : "border-gray-200"} bg-white flex flex-col justify-between`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-[#0b99ce] text-white px-3 py-1 rounded-bl-lg text-sm font-semibold">
                                    Popular
                                </div>
                            )}
                            <div>
                                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                                <p className="text-3xl font-extrabold text-[#0b99ce] mb-4">{plan.price}</p>
                                <p className="text-gray-600 mb-6">{plan.description}</p>

                                <ul className="mb-6 space-y-3 text-left flex-1">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <FiCheck className="text-[#fe3885] w-5 h-5" /> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex justify-center">
                                <button
                                    className={`px-6 py-3 w-full rounded-xl text-white font-semibold ${plan.popular ? "bg-[#0b99ce] hover:bg-[#087bb5]" : "bg-[#fe3885] hover:bg-[#e62d78]"} transition-colors duration-300`}
                                >
                                    {plan.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Pricing;
