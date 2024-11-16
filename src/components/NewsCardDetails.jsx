import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NewsCardDetails = ({ news }) => {
    return (
        <div className="card bg-base-100 shadow-lg border rounded-md p-5">
            <figure className="mb-5 rounded-md">
                <img
                    src={news?.image_url}
                    alt="News Thumbnail"
                    className="w-full h-64 object-cover"
                />
            </figure>
            <div className="card-body p-0">
                <h2 className="card-title text-xl font-bold">{news?.title}</h2>
                <p className="text-justify text-gray-700">{news?.details}</p>
                <div className="mt-4">
                    <Link to={`/category/${news?.category_id}`} className="btn bg-[#D72050] text-base text-white rounded-none">
                        <FaArrowLeftLong />
                        All news in this category
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsCardDetails;