const { getPreps } = require("./queries/get-data");

exports.get = (req, res) => {
  let apocalypseType = req.params.apocalypse;

  getPreps(apocalypseType)
    .then(values => {
      return values.rows;
    })
    .then(values => {
      res.render("single-prep", { preps: values });
    })
    .catch(err => {
      console.log(err);
      res.status(500).render("error-500");
    });
};
