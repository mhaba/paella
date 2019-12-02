module.exports = {
    'Test Page Load' : function (browser) {
      browser
        .url("http://localhost:8000/player/index.html?id=video-remote-1")
        .waitForElementVisible('body', 1000)
        .assert.visible('.play-icon')
        .click('.videoWrapper')
        .waitForElementNotVisible('.play-icon')
        .waitForElementVisible('.buttonPlugin.left.flexSkip_Forward_30')
        .assert.visible('.buttonPlugin.left.flexSkip_Forward_30')
        .click('.buttonPlugin.left.flexSkip_Forward_30')

        //Has the recording jumped forward 30 seconds? 

        .end();
    }
  };
  