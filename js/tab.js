let Tab = function (tabData) {
    this.tabButtonId = tabData.tabButtonId;
    this.tabContentId = tabData.tabContentId;
    this.contentUrl = tabData.contentUrl;
    this.content = null;
};

Tab.prototype.getContent = function () {
    return this.content;
};

Tab.prototype.prepareContent = function () {
    new Fetcher().loadData(this.contentUrl).then(data => {
        const parsed = JSON.parse(JSON.stringify(data));
        const articles = parsed.articles;
        for (let i = 0; i < articles.length; i++) {
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            let img = document.createElement('IMG');
            img.classList.add('articleImg');
            img.src = articles[i].urlToImage;
            h3.innerHTML = articles[i].title;
            p.innerHTML = articles[i].description;
            document.querySelector('#' + this.tabContentId).appendChild(h3).appendChild(p).appendChild(img);
            document.querySelector('#' + this.tabContentId).appendChild(p);
            document.querySelector('#' + this.tabContentId).appendChild(img);
        }
    });
    return this;
};

Tab.prototype.setActive = function () {
    this.prepareContent();
};

