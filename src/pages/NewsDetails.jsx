import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import NewsCardDetails from "../components/NewsCardDetails";

const NewsDetails = () => {

    const data = useLoaderData();
    const news = data.data[0];
    console.log(news)

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-10/12 mx-auto grid grid-cols-12 gap-5">
                <section className="col-span-9">
                    <h2 className="font-semibold mb-5">Dragon News</h2>
                    <NewsCardDetails news={news}></NewsCardDetails>
                </section>
                <aside className="col-span-2">
                    
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;