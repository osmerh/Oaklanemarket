module.exports = (oak, testData ) => {
    oak
    .click('@shopAll')
    .waitForElementVisible('@header', 5000)
    .api.pause(1000)
    oak
    .click('@andyTop')
    .click('@floralTop')
    .click('@compare')
}