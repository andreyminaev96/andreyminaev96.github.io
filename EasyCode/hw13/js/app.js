class PostUI {
    constructor() {
        this._container = document.querySelector(".posts-wrapper");
    }

    addPost(post) {
        const template = PostUI._createTemplate(post);
        this._container.insertAdjacentHTML("beforeend", template);
    }

    showEmptyMsg() {
        this._container.insertAdjacentHTML("beforeend", PostUI._emtyContainerTemplate());
    }

    static _createTemplate({name: userName, email: userEmail, address: {city: userCity}, phone: userPhone}) {
        return `
        <div class="card mt-3">
            <div class="card-body">
                <h5 class="card-title" onclick="hidenElement(this)">${userName}</h5>
                <div class="hideElement mt-3">
                    <p class="card-text">Email: ${userEmail}</p>
                    <p class="card-text">City: ${userCity}</p>
                    <p class="card-text">Phone: ${userPhone}</p>
                </div> 
            </div>
        </div>
        `
    }

    static _emtyContainerTemplate() {
        return `<div class="alert alert-info">Нет постов.</div>`
    }
}

function generatePosts(posts) {
    const ui = new PostUI();
    if (!posts.length) return ui.showEmptyMsg();
    posts.forEach(post => ui.addPost(post));
}

const http = new CustomHttp();
const apiUrl = "https://jsonplaceholder.typicode.com";

http.get(`${apiUrl}/users`, (res) => {
    generatePosts(res);
});

function hidenElement(e) {
  e.nextElementSibling.classList.toggle("hideElement")
}
