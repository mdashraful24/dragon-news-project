import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3 mt-10">Find Us On</h2>
            <div className="join join-vertical flex *:bg-base-100">
                <button className="btn join-item justify-start">
                    <span className="text-blue-800 p-1 bg-gray-200 rounded-full"><FaFacebookF /></span> Facebook
                </button>
                <button className="btn join-item justify-start">
                    <span className="text-blue-400 p-1 bg-gray-200 rounded-full"><FaTwitter /></span> Twitter
                </button>
                <button className="btn join-item justify-start">
                    <span className="text-orange-700 p-1 bg-gray-200 rounded-full"><FaInstagram /></span> Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;