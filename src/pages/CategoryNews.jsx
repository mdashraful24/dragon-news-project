import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {

    const { data: news } = useLoaderData();
    // console.log(news);

    return (
        <div>
            <h2 className="font-semibold mb-5">Dragon News Home ({news.length})</h2>
            {/* <p className="text-gray-400 text-sm mb-5">({news.length}) News Found On This Category</p> */}
            <div>
                {
                    news.map((singleNews) => (
                        <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryNews;