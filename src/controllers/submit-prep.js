const { addPrep } = require("../controllers/queries/post-data");

exports.post = (req, res) => {
  console.log('submit-prep controller triggered')
  const newPrep = req.body;
  // const prepperId = req.session.id
  const prepperId = 1; // hard code for now (no session implemented yet)
  addPrep(prepperId, newPrep)
    .then(() => {
      console.log('addPrep in submit-prep fulfills')
      res.redirect("/profile");
    })
    .catch(err => {
      console.log(err);
      res.status(500).render("error-500");
    });
};
