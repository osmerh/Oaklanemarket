var searchItem = require('../test-assets/searchItem')
var testData = require('../test-assets/testData')
var oak = ''

module.exports = {
    beforeEach: browser => {
        oak = browser.page.pages()
        // oak.navigate()
            browser.url('http://oaklanemarket.com/')
            // oak.waitForElementVisible('@popUp', 5000)
            // .click('@popUp')
            // .api.pause(1000)
    },
    after: browser => {
        browser.end()
    },
    'Sign In': browser => {
        oak
        .waitForElementVisible('@popUp', 5000)
        .click('@popUp')
        .api.pause(1000)
        oak
        // .waitForElementVisible('@signIn', 5000)
        .click('@signIn')
        .setValue('@email', 'osmerhchichia@hotmail.com')
        .setValue('@password', 'osmerh11')
        .click('@signInButton')
        .expect.element('@header').text.to.contain('Orders').before(5000)

    },
    'Search Item': browser => {
        searchItem(oak, testData.validSearch)
        oak
        .expect.element('@header').text.to.contain('2 results for').before(5000)
    },
    'Compare Items': browser => {
        oak
        .click('@shopAll')
        .waitForElementVisible('@header', 5000)
        .api.pause(1000)
        oak
        .click('@andyTop')
        .click('@floralTop')
        .click('@compare')
        .expect.element('@header').text.to.contain('Comparing 2 Products')
    },
    'Cart': browser => {
        oak
        .click('@tops')
        .waitForElementVisible('@header', 5000)
        .api.pause(1000)
        oak
        .waitForElementVisible('@crochetTop', 5000)
        .click('@crochetTop')
        .waitForElementVisible('@header',5000)
        .api.pause(1000)
        oak
        .click('@large')
        .click('@addToCart')
        .waitForElementVisible('@productDetails', 5000)
        .api.pause(1000)
        oak
        .click('@closeX')
        .waitForElementVisible('@header', 5000)
        .api.pause(1000)
        oak
        .click('cartButton')
        .click('@viewCart')
        .waitForElementVisible('@header', 5000)
        .api.pause(1000)
        oak
        .click('@deleteItem')
        .click('@okButton')
        .expect.element('@header').text.to.contain('Your Cart (0 items)').before(5000)
        // .click('@tops')
        // waitForElementVisible('@header', 5000)
        // .click('@aidenTop')






    }

}