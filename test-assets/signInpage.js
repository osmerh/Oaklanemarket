module.exports = (oak, testData ) => {
    oak
    // .waitForElementVisible('@popUp', 5000)
    // .click('@popUp')
    // .api.pause(1000)
    // oak
    .click('@signIn')
    .setValue('@email', testData.email)
    .setValue('@password', testData.password)
    .click('@signInButton')
}