const path = require("path");

exports.unauth = (req, res) => {
    res.status(401).render("error-401");
};

exports.client = (req, res) => {
    res.status(404).render("error-404");
};

exports.server = (err, req, res, next) => {
    res.status(500).render("error-500")
};