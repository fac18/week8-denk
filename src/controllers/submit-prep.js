const postData = require("../controllers/queries/post-data");

exports.post = (req, res) => {
  const newPrep = req.body;
  addPrep(newPrep, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/get-prepped");
    }
  });
};