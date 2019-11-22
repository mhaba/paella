module.exports = {
    'Test Page Load' : function (browser) {
      browser
        .url("http://localhost:8000/player/index.html?id=video-remote-1")
        .waitForElementVisible('body', 1000)
        .assert.visible('.play-icon')
        .click('.videoWrapper')
        .waitForElementNotVisible('.play-icon')

        .waitForElementVisible('#buttonPlugin13')
        .assert.visible('#buttonPlugin13')

        .click('#buttonPlugin13')
        .waitForElementVisible('#buttonPlugin14_container')
        .assert.visible('#buttonPlugin14_container')

        .click('#facebook_button')

        //Ver si se ha abierto otra pestaña

        .end();
    }
  };
