module.exports = (oak, testData) => {
    oak
        .click('@tops')
        .waitForElementVisible('@header', 5000)
        .api.pause(1000)
    oak
        .waitForElementVisible('@crochetTop', 5000)
        .click('@crochetTop')
        .waitForElementVisible('@productView', 5000)
        .api.pause(1000)
    oak
        .click('@large')
        .click('@addToCart')
        .waitForElementVisible('@productDetails', 5000)
        .api.pause(1000)
    oak
        .click('@closeX')
        .waitForElementVisible('@productView', 5000)
        .api.pause(1000)
    oak
        .click('@cartButton')
        .waitForElementVisible('@viewCart', 5000)
        .click('@viewCart')
        .waitForElementVisible('@cartView', 5000)
        .api.pause(1000)
    oak
        .click('@deleteItem')
        .waitForElementVisible('@okButton', 5000)
        .click('@okButton')
        .api.pause(1000)

}