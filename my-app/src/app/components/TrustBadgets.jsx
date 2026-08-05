import { FaTruck, FaShieldAlt, FaSyncAlt, FaClock } from "react-icons/fa";

const badges = [
    { icon: <FaTruck size={28} />, title: "Free Shipping", desc: "On orders over $100" },
    { icon: <FaShieldAlt size={28} />, title: "Secure Payment", desc: "100% protected checkout" },
    { icon: <FaSyncAlt size={28} />, title: "Easy Returns", desc: "7-day return window" },
    { icon: <FaClock size={28} />, title: "24/7 Support", desc: "We're here anytime" },
];

const TrustBadges = () => {
    return (
        <div className="flex flex-wrap justify-around items-center bg-gray-200 rounded-xl py-2 md:py-8 px-2 md:px-6 gap-2 md:gap-6 mt-5md:mt-10">
            {badges.map((item, index) => (
                <div key={index} className={`flex items-center gap-1.5 md:gap-3 ${index === 3 ? "hidden lg:flex" : ""}`}>
                    <div className="text-blue-900">{item.icon}</div>
                    <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TrustBadges;
