module.exports = {
    'Test Page Load' : function (browser) {
      browser
        .url("http://localhost:8000/player/index.html?id=video-remote-1")
        .waitForElementVisible('body', 1000)
        .assert.visible('.play-icon')
        .click('.videoWrapper')
        .waitForElementNotVisible('.play-icon')

        .waitForElementVisible('#buttonPlugin15')
        .assert.visible('#buttonPlugin15')

        .useXpath()
        .assert.containsText("//div[@id='buttonPlugin15']/span","720p")
        .useCss()

        //Comprobar que la calidad está a 720p

        .click('#buttonPlugin15')
        .waitForElementVisible('#buttonPlugin20_container')
        .assert.visible('#buttonPlugin20_container')

        .useXpath()

        .waitForElementVisible("//div[@id='240p']")
        .assert.visible("//div[@id='240p']")
        .click("//div[@id='240p']")
        .pause(50) //pause para esperar a que cambie el elemento
        .assert.containsText("//div[@id='buttonPlugin15']/span","240p")

        .useCss()

        //Comprobar que la calidad está a 240p

        .end();
    }
  };
