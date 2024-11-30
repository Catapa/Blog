import { ArticlesProvider } from "@/context/articles-context/articles-context";
import { OwnArticles } from "./features/OwnArticles";

const OwnArticlesPage: React.FC<{}> = () => {
    return (
        <main className="page-content">
            <h1 className="text-2xl font-extralight mb-4">My Articles</h1>
            <ArticlesProvider>
                <OwnArticles />
            </ArticlesProvider>
        </main>
    )
};

export default OwnArticlesPage;