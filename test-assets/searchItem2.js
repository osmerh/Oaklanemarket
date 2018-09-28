module.exports = (oak, testData) => {
    oak
        // .waitForElementVisible('@popUp', 5000)
        // .click('@popUp')
        // .api.pause(1000)
        .click('@search')
        .setValue('@searchBar', testData.searchBar + oak.api.Keys.ENTER)
    // .api.pause(10000)
    // .sendKeys(browser.Keys.ENTER)
    // .api.pause(100000)   
}