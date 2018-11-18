const Fetcher = function () {
    return this;
};

Fetcher.prototype.loadData = function (url, method = 'GET') {
    const request =  new Request(url, {method : method});

    return fetch(request)
        .then(response => {return response.json()}) // parses response to JSON
        .then(posts => {return posts}); // parses response to JSON
};