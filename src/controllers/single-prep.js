const { getPreps } = require("./queries/get-data");

exports.get = (req, res) => {
  let apocalypseType = req.params.apocalypse;

  getPreps(apocalypseType)
    .then(values => {
      console.log(values.rows);
      return values.rows;
    })
    .then(values => {

        console.log(values[0]);
      res.render("single-prep", { preps: values });
    })
    .catch(err => {
      console.log(err);
      res.status(500).render("error-500");
    });
};
