module.exports = {
    'Test Page Load' : function (browser) {
      browser
        .url("http://localhost:8000/player/index.html?id=video-remote-1")
        .waitForElementVisible('body', 1000)
        .assert.visible('.play-icon')
        .click('.videoWrapper')
        .waitForElementNotVisible('.play-icon')

        .waitForElementVisible('#buttonPlugin7')
        .assert.visible('#buttonPlugin7')
        .click('#buttonPlugin7')

        .waitForElementVisible('#buttonPlugin8_container')
        .assert.visible('#buttonPlugin8_container')

        //Introducir una búsqueda?

        .end();
    }
  };