module.exports = {
    'Test Page Load' : function (browser) {
      browser
        .url("http://localhost:8000/player/index.html?id=video-remote-1")
        .waitForElementVisible('body', 1000)
        .assert.visible('.play-icon')
        .click('.videoWrapper')
        .waitForElementNotVisible('.play-icon')

        .waitForElementVisible('#buttonPlugin16')
        .assert.visible('#buttonPlugin16')
        .click('#buttonPlugin16')
        .waitForElementVisible('#buttonPlugin17_container')
        .assert.visible('#buttonPlugin17_container')

        .useXpath()

        //First themebutton class div
        .waitForElementVisible("(//div[@class='themebutton'])[1]")
        .assert.visible("(//div[@class='themebutton'])[1]")
        .assert.containsText("(//div[@class='themebutton'])[1]","Dark")

        .useCss()

        //Comprobar si se ha hecho zoom.

        .end();
    }
  };
