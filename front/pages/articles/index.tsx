import ArticleItem from "../../components/article/ArticleItem";
import ArticleSidebar from "../../components/article/ArticleSidebar";

const Articles = () => {
    return (
        <div className="with-full lg:max-w-[1248px] my-6 mx-auto lg:flex border">
            <div className="border lg:mr-6">
                <ArticleItem />
            </div>
            <div>
                <ArticleSidebar />
                <ArticleSidebar />
            </div>
            <div>

            </div>
        </div>
    );
}

export default Articles;