// Create instance
const newsService = new NewsService(new CustomHttp());
const newsUI = new NewsUI();
const serchQueryParams = new NewsService(new CustomHttp());

// UI elements
const countrySelect = document.querySelector(".country");
const categorySelect = document.querySelector(".category");
const formSubmit = document.querySelector("form");

const getCountryTechnolodyHandler = () => {
    const country = countrySelect.value;
    const category = categorySelect.value;

    newsService.fetchTopHeadlines((res) => {
        const { articles, totalResults } = res;
        // todo проверить количество новостей
        newsUI.clearContainer();
        articles.forEach(news => newsUI.addNews(news));
    }, country, category);

};

countrySelect.addEventListener("change", getCountryTechnolodyHandler);
categorySelect.addEventListener("change", getCountryTechnolodyHandler);
window.addEventListener("load", getCountryTechnolodyHandler);

formSubmit.addEventListener("submit", e => {
    e.preventDefault();
    const resValue = e.target.firstElementChild.firstElementChild;
    if (resValue.value === "") return alert('Введите значения');

    serchQueryParams.handlerSearch((res) => {
        const { articles, totalResults } = res;
        newsUI.clearContainer();
        if (totalResults === 0) return newsUI.errorMasseg();
        articles.forEach(news => newsUI.addNews(news));
    },resValue.value);

    resValue.value = "";
});


