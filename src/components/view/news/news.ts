import "./news.css"

interface NewsItem {
    urlToImage: string;
    url: string;
    author: string;
    sources: { name: string };
    publishedAt: string;
    title: string;
    description: string;
}

class News {
    draw(data: NewsItem[]) {
        const news = data.length >= 10 ? data.filter((_, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        news.forEach((item, idx) => {
            console.log('Received news item:', item);

            const newsClone = newsItemTemp?.content.cloneNode(true) as DocumentFragment;

            if (idx % 2) {
                const newsItemElement = newsClone.querySelector('.news__item');
                if (newsItemElement) {
                    newsItemElement.classList.add('alt');
                }
            }

            const metaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            if (metaPhoto) {
                const imageUrl = item.urlToImage;
                console.log('Setting background image to:', imageUrl);
                metaPhoto.style.backgroundImage = `url(${imageUrl})`;
            }

            const metaAuthor = newsClone.querySelector('.news__meta-author');
            if (metaAuthor) {
                metaAuthor.textContent = item.author;
            }

            const metaDate = newsClone.querySelector('.news__meta-date');
            if (metaDate) {
                metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            const descriptionTitle = newsClone.querySelector('.news__description-title');
            if (descriptionTitle) {
                descriptionTitle.textContent = item.title;
            }

            const descriptionSource = newsClone.querySelector('.news__description-source');
            if (descriptionSource) {
                descriptionSource.textContent = item.sources ? item.sources.name : 'Неизвестный источник';
            }

            const descriptionContent = newsClone.querySelector('.news__description-content');
            if (descriptionContent) {
                descriptionContent.textContent = item.description;
            }

            const readMoreLink = newsClone.querySelector('.news__read-more a');
            if (readMoreLink) {
                readMoreLink.setAttribute('href', item.url);
            }

            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector('.news');
        if (newsContainer) {
            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        }
    }
}

export default News;
