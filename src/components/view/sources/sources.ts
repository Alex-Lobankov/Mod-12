import './sources.css';
interface SourceItem {
    id: string;
    name: string;
}

class Sources {
    draw(data: SourceItem[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
        data.forEach((item) => {
            const sourceClone = sourceItemTemp?.content.cloneNode(true) as DocumentFragment;
            const itemNameElement = sourceClone.querySelector<HTMLTemplateElement>('.source__item-name');
            if (itemNameElement) {
                itemNameElement.textContent = item.name;
            }
            const sourceItemElement = sourceClone.querySelector<HTMLTemplateElement>('.source__item');
            if (sourceItemElement) {
                sourceItemElement.setAttribute('data-source-id', item.id);
            }
            fragment.append(sourceClone);
        });
        const sourcesContainer = document.querySelector<HTMLTemplateElement>('.sources');
        if (sourcesContainer) {
            sourcesContainer.append(fragment);
        }
    }
}

export default Sources;
