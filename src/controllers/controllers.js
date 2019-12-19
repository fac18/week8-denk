const express = require("express");
const path = require("path");
const router = express.Router();

const home = require("./home");
const about = require("./about");
const error = require("./error");
const getPrepped = require("./get-prepped");
const login = require("./login");
const logout = require("./logout");
const singlePrep = require("./single-prep");
const singlePrepper = require("./single-prepper");

router.get("/", home.get);
router.get("/about", about.get);
router.get("/get-prepped", getPrepped.get);
router.get("/login", login.get);
router.get("/logout", logout.get);
router.get("/single-prep", singlePrep.get);
router.get("/prepper/:profile", singlePrepper.get);


router.use(error.client);
router.use(error.server);
router.use(error.unauth);

module.exports = router;
