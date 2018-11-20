var express = require("express");
var router = express.Router();

var webdriver = require("selenium-webdriver");
var firefox = require("selenium-webdriver/firefox");

router.post("/", function(req, res, next) {
  var driver = new webdriver.Builder()
    .forBrowser("firefox")
    .build();

  if (req.body.user) {
    driver.get(req.body.url);

    driver
      .wait(
        webdriver.until.elementLocated(webdriver.By.name("VerLoginID")),
        30000
      )
      .then(result => {
        driver
          .findElements(webdriver.By.name("VerLoginID"))
          .then(found => {
            console.log("Username Element Found");
            setTimeout(() => {
              driver
                .findElement(webdriver.By.name("VerLoginID"))
                .sendKeys(req.body.user.username);

              driver
                .findElements(webdriver.By.name("VerPassword"))
                .then(found => {
                  console.log("Password Element Found");
                  driver
                    .findElement(webdriver.By.name("VerPassword"))
                    .sendKeys(req.body.user.password);

                  driver
                    .findElements({ id: "submitLoginButton" })
                    .then(found => {
                      console.log("Submit Button Found");
                      driver.findElement({ id: "submitLoginButton" }).click();
                    });
                });
            }, 500);
          })
          .catch(error => console.log(error));
      });
  } else {
    driver.get(req.body.url);
  }
});

module.exports = router;
