module.exports = {
    'Test Page Load' : function (browser) {
      browser
        .url("http://localhost:8000/player/index.html?id=video-remote-1")
        .waitForElementVisible('body', 1000)
        .assert.visible('.play-icon')
        .click('.videoWrapper')
        .waitForElementNotVisible('.play-icon')

        .waitForElementVisible('#buttonPlugin17')
        .assert.visible('#buttonPlugin17')
        .click('#buttonPlugin17')
        .waitForElementVisible('#buttonPlugin18_container')
        .assert.visible('#buttonPlugin18_container')

        .assert.visible('.glyphicon.glyphicon-zoom-in')
        .click('.glyphicon.glyphicon-zoom-in')

        //Has the recording zoomed?

        .end();
    }
  };
