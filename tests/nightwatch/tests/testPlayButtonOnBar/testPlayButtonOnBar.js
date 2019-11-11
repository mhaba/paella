module.exports = {
    'Test Play Button On Bar' : async function (browser) {
      await browser
        .url("http://localhost:8000/player/index.html?id=video-remote-1")
        .waitForElementVisible('body', 1000)
        .assert.visible('.play-icon')
        .click('.videoWrapper')
        .waitForElementNotVisible('.play-icon')
        .waitForElementVisible('.buttonPlugin.left.pauseButton');
      await browser
        .click('.buttonPlugin.left.pauseButton')
        .waitForElementVisible('.buttonPlugin.left.playButton')
        .click('.buttonPlugin.left.playButton')
        .waitForElementVisible('.buttonPlugin.left.pauseButton')
        .end();
    }
  };