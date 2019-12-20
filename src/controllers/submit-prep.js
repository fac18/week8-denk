const { addPrep } = require("../controllers/queries/post-data");

exports.post = (req, res) => {
  const newPrep = req.body;
  // const prepperId = req.session.id
  const prepperId = 1; // hard code for now (no session implemented yet)
  addPrep(prepperId, newPrep)
    .then(() => {
      res.redirect("/profile");
    })
    .catch(err => {
      console.log(err);
      res.status(500).render("error-500");
    });
};
