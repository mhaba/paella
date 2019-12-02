module.exports = {
    'Test Page Load' : function (browser) {
      browser
        .url("http://localhost:8000/player/index.html?id=video-remote-1")
        .waitForElementVisible('body', 1000)
        .assert.visible('.play-icon')
        .click('.videoWrapper')
        .waitForElementNotVisible('.play-icon')
        .waitForElementVisible('.buttonPlugin.left.showPlaybackRateButton')
        .assert.visible('.buttonPlugin.left.showPlaybackRateButton')
        .click('.buttonPlugin.left.showPlaybackRateButton')
        .waitForElementVisible('.buttonPluginPopUp.showPlaybackRateButton')

        .useXpath()
        .waitForElementVisible("//*[@id='buttonPlugin4_container']/div[1]")
        .click("//*[@id='buttonPlugin4_container']/div[1]")
        .useCss()

        .assert.containsText("#buttonPlugin3 .button-text", "0.75x")

        //Check if the playback speed has been reduced

        .end();
    }
  };
