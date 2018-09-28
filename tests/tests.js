var signIn = require('../test-assets/signInpage')
var invalidSignIn = require('../test-assets/invalidSignIn')
var compare = require('../test-assets/compare')
var cart = require('../test-assets/cart')
var cart2 = require('../test-assets/cart2')
var searchItem = require('../test-assets/searchItem')
var searchItem2 = require('../test-assets/searchItem2')
var testData = require('../test-assets/testData')
var oak = ''
//Test Plan https://dmutah.atlassian.net/browse/Q7O-66
module.exports = {
    beforeEach: browser => {
        oak = browser.page.pages()
        oak.navigate()
    },
    after: browser => {
        browser.end()
    },//https://dmutah.atlassian.net/browse/Q7O-75
    'Invalid Sign In': browser => {
        invalidSignIn(oak, testData.invalidSignIn)
        oak
            .expect.element('@emailInvalid').text.to.contain('Please use a valid email address, such as user@example.com.').before(5000)
    },//https://dmutah.atlassian.net/browse/Q7O-76
    'Sign In': browser => {
        signIn(oak, testData.validSignIn)
        oak
            .expect.element('@header').text.to.contain('Orders').before(5000)
    },//https://dmutah.atlassian.net/browse/Q7O-77
    'Search Item': browser => {
        searchItem(oak, testData.validSearch)
        oak
            .expect.element('@header').text.to.contain('2 results for').before(5000)
    },//https://dmutah.atlassian.net/browse/Q7O-78
    'Search Item2': browser => {
        searchItem2(oak, testData.invalidSearch)
        oak
            .expect.element('@header').text.to.contain('0 results for').before(5000)
    },//https://dmutah.atlassian.net/browse/Q7O-79
    'Compare Items': browser => {
        oak
        compare(oak, testData)
        oak
            .expect.element('@header').text.to.contain('Comparing 2 Products')
    },// The following links cover the automations test for both 'Cart' and 'Cart2'
    //https://dmutah.atlassian.net/browse/Q7O-70
    'Cart': browser => {
        cart(oak, testData)
        oak
            .expect.element('@header').text.to.contain('Your Cart (0 items)')
    },
    'Cart2': browser => {
        cart2(oak, testData)
        oak
            .expect.element('@header').text.to.contain('Your Cart (1 item)')
    },
}