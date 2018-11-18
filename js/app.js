const TabsApp = (function () {

    const tabContainer = new TabContainer('tabContainer');

    const tab1 = new Tab({
        tabButtonId : 'tab1',
        tabContentId : 'tabContent',
        contentUrl : 'https://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey=90a045dbc08c457896fef6e084025ea4'
    });

    const tab2 = new Tab({
        tabButtonId : 'tab2',
        tabContentId : 'tabContent',
        contentUrl : 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=90a045dbc08c457896fef6e084025ea4'
    });

    const tab3 = new Tab({
        tabButtonId : 'tab3',
        tabContentId : 'tabContent',
        contentUrl : 'https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=90a045dbc08c457896fef6e084025ea4'
    });

    const tab4 = new Tab({
        tabButtonId : 'tab4',
        tabContentId : 'tabContent',
        contentUrl : 'https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=90a045dbc08c457896fef6e084025ea4'
    });

    this.init = function () {
        tabContainer.addTab(tab1)
            .addTab(tab2)
            .addTab(tab3)
            .addTab(tab4);

        tabContainer.addClickListeners();
        tabContainer.setActiveTab('tab1');

    };

    return this.init();
})();