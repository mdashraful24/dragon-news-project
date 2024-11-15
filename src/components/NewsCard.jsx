import { FaEye, FaStar, FaShareAlt, FaBookmark } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    return (
        <div className="bg-white rounded-sm shadow-md overflow-hidden mb-5">
            <div className="flex items-center justify-between text-sm text-gray-500 bg-[#F3F3F3] p-4">
                <div className="flex items-center">
                    <img
                        className="w-8 h-8 rounded-full mr-2"
                        src={news.author.img}
                        alt="Author"
                    />
                    <div>
                        <p className="font-semibold">{news.author.name}</p>
                        <p>{news.author.published_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <FaBookmark />
                    <FaShareAlt className="cursor-pointer" />
                </div>
            </div>
            <div className="p-4">
                <img
                    className="w-full h-96"
                    src={news.thumbnail_url}
                    alt="News Thumbnail"
                />
                <h2 className="text-lg font-bold mt-2">
                    {news.title}
                </h2>
                <p className="text-gray-600 text-sm mt-2">{news.details.substring(0, 100)}... <span className="text-red-500 cursor-pointer">Read More</span></p>
                <div className='border-t mt-5'></div>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < Math.round(news.rating.number) ? "text-yellow-500" : "text-gray-300"} />
                        ))}
                        <span className="ml-2 text-gray-600">{news.rating.number}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <FaEye />
                        <span className="ml-1">{news.total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;