class NewsUI {
    constructor() {
        this._container = document.querySelector(".news-container .row");
        this._defaultImage = "img/default-image.png";
    }

    addNews(news) {
        console.log(news);
        const template = this._newsTemplate(news);
        this._container.insertAdjacentHTML("afterbegin", template);
    }

    clearContainer() {
        this._container.innerHTML = "";
    }
    errorMasseg () {
        const template = this._newsError();
        this._container.insertAdjacentHTML("afterbegin", template)
    }

    _newsTemplate({urlToImage, url, title, description}) {
        return `
        <div class="col s12 l6"> 
            <div class="card">
                <div class="card-image">
                    <img src="${urlToImage || this._defaultImage}">
                </div>
                <div class="card-content">
                    <span class="card-title">${title}</span>
                    <p>${description || ""}</p>
                </div>
                <div class="card-action">
                    <a href="${url}" target="_blank">Read more</a>
                </div>
            </div>
        </div>
        `;
    }
    _newsError(){
        return `
            <div class="col s12 l6">
                <h4>Новостей по даному запросу нет!</h4>
            </div>
        `
    }
}

