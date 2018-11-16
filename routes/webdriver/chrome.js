var express = require("express");
var router = express.Router();

var webdriver = require("selenium-webdriver");
var chrome = require("selenium-webdriver/chrome");
var path = require("chromedriver").path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

router.post("/", function(req, res, next) {
  var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();
    if(req.body.url) {
        driver.get(req.body.url);
        res.send("Chrome Run successful")
    }
});

module.exports = router;
