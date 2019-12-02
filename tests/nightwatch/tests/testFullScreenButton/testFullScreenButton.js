module.exports = {
    'Test Page Load' : function (browser) {
      browser
        .url("http://localhost:8000/player/index.html?id=video-remote-1")
        .waitForElementVisible('body', 1000)
        .assert.visible('.play-icon')
        .click('.videoWrapper')
        .waitForElementNotVisible('.play-icon')

        .waitForElementVisible('#buttonPlugin10')
        .assert.visible('#buttonPlugin10')

        .click('#buttonPlugin10')
        //Is the fullscreen on?

        .useXpath()
        .waitForElementVisible("//div[@id='buttonPlugin10']/i[@class='button-icon icon-fullscreen']") //fullscreen button
        .assert.visible("//div[@id='buttonPlugin10']/i[@class='button-icon icon-fullscreen']")
        .useCss() 

        .click('#buttonPlugin10')
        //Is the fullscreen off?
        .waitForElementVisible('#buttonPlugin10')
        .assert.visible('#buttonPlugin10')

        .end();
    }
  };