import News from './news/news';
import Sources from './sources/sources';

interface Article {
    title: string;
    author: string;
    urlToImage: string;
    publishedAt: string;
    sources: { name: string };
    description: string;
    url: string;
}
interface Source {
    id: string;
    name: string;
}
interface NewsData {
    articles: Article[];
}
interface SourcesData {
    sources: Source[];
}
export class AppView {
    private news: News;
    private sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }
    drawNews(data: NewsData) {
        const values = data?.articles || [];
        this.news.draw(values);
    }
    drawSources(data: SourcesData) {
        const values = data?.sources || [];
        this.sources.draw(values);
    }
}

export default AppView;
