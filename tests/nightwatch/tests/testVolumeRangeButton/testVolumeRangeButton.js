module.exports = {
    'Test Page Load' : function (browser) {
      browser
        .url("http://localhost:8000/player/index.html?id=video-remote-1")
        .waitForElementVisible('body', 1000)
        .assert.visible('.play-icon')
        /*.useXpath()
        .moveTo("//*[@id='play-icon']")
        .useCss()*/
        .click('.videoWrapper')
        .waitForElementNotVisible('.play-icon')
        //.waitForElementVisible('.buttonPlugin.left.volumeRangeButton')
        .useXpath()
        .waitForElementVisible("//*[@id='buttonPlugin19']")
        .assert.visible("//*[@id='buttonPlugin19']")  
        //.moveTo("//*[@id='buttonPlugin19']")

        //Ejemplo: The web element identifier is the string constant "element-6066-11e4-a52e-4f735466cecf". 

        .moveTo(browser.element('xpath', "//*[@id='buttonPlugin19']", function(result){
          console.log(result.value)
          return result.value 
        }))


        /*.moveTo(browser.element('css selector', '.playerContainer .buttonPlugin19', function(result){
          console.log(result.value)
          return result.value 
        }))*/


        .waitForElementVisible("//*[contains(@class, 'expandable-content.buttonPlugin.left.volumeRangeButton')]")
        //.assert.visible('.expandable-content.buttonPlugin.left.volumeRangeButton')
        
        //.click('.buttonPlugin.left.volumeRangeButton')
        //Comprobar sonido?
        //.click('.buttonPlugin.left.volumeRangeButton')


        .useCss()
        /*
        .waitForElementVisible('.buttonPluginPopUp.volumeRangeButton')

        .useXpath()
        .waitForElementVisible("//*[@id='buttonPlugin4_container']/div[1]")
        .click("//*[@id='buttonPlugin4_container']/div[1]")
        .useCss()

        .assert.containsText("#buttonPlugin3 .button-text", "0.75x")

        //Ver si la velocidad de reproducción pasa a 0.75
        */
        .end();
    }
  };
