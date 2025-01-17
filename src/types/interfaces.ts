export interface ISource {
    id: string;
    name: string;
}

export interface SourcesData {
    sources: ISource[];
}

export interface IArticle {
    sources: ISource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface INewsResponse {
    status: string;
    totalResults: number;
    articles: IArticle[];
}

export interface ISourceResponse {
    status: string;
    sources: ISource[];
}
