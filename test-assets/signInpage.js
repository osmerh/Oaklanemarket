module.exports = (oak, testData ) => {
    oak
    .waitForElementVisible('@popUp', 5000)
    .click('@popUp')
    .api.pause(1000)
    oak
    .click('@signIn')
    .setValue('@email', 'osmerhchichia@hotmail.com')
    .setValue('@password', 'osmerh11')
    .click('@signInButton')
}