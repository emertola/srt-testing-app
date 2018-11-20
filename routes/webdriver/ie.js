var express = require("express");
var router = express.Router();

var webdriver = require("selenium-webdriver");

router.post("/", function(req, res, next) {
    var capabilities = webdriver.Capabilities.ie();
    capabilities.set("ignoreProtectedModeSettings", true);
    capabilities.set("ignoreZoomSetting", true);
    
  var driver = new webdriver.Builder()
    .withCapabilities(capabilities)
    .build();

    driver.get(req.body.url);

//   if (req.body.user) {
//     driver.get(req.body.url);


//   } else {
//     driver.get(req.body.url);
//   }
});

module.exports = router;
