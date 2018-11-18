let TabContainer = function (wrapperId) {
    this.wrapper = document.getElementById(wrapperId);
    this.tabs = [];
};

TabContainer.prototype.addTab = function (tab) {
    this.tabs.push(tab);
    return this;
};

TabContainer.prototype.setActiveTab = function (tabId) {
    if (this.wrapper.querySelector('button.active')) {
        this.wrapper.querySelector('button.active').classList.remove('active');
    }
    document.querySelector('button#' + tabId).classList.add('active');
    let activeTab = null;
    for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i].tabButtonId === tabId) {
            activeTab = this.tabs[i];
            activeTab.setActive();
            break;
        }
    }
    this.wrapper.querySelector('#' + activeTab.tabContentId).innerHTML = activeTab.getContent();
};

TabContainer.prototype.addClickListeners = function () {
    for (let i = 0; i < this.tabs.length; i++) {
        document.getElementById(this.tabs[i].tabButtonId).addEventListener('click', (event) => {
            let clickedTabId = event.srcElement.id;
            this.setActiveTab(clickedTabId);
        })
    }
};