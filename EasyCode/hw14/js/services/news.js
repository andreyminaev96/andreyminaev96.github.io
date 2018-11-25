class NewsService {
    constructor(http) {
        this._key = "996bd2666d234e5590651b4665ef0592";
        this._url = "https://newsapi.org/v2";
        this._country = "ua";
        this._category = "technology";
        this._http = http;
    }
    /**
     * Фунцыя для получения ответа с сервера по заданым фтрибутам
     * @param {any} callback
     * @param {string} country
     * @param {string} category
     */
    fetchTopHeadlines(callback, country = this._country, category = this._category) {
        this._http.get(`${this._url}/top-headlines?country=${country}&category=${category}&apiKey=${this._key}`, callback);
    }

    /**
     * Фунцыя для получения ответа с сервера по заданым фтрибутам
     * @param callback
     * @param (string) queryParams
     */
    handlerSearch(callback, queryParams) {
        this._http.get(`${this._url}/everything?q=${queryParams}&apiKey=${this._key}`, callback)
    }
}

