const { getApocs } = require('./queries/get-data')

exports.get = (req, res) => {
    getApocs()
      .then(queryRes => queryRes.rows.map(x => x.apocalypse_type))
      .then(apocalypses => {
        res.render("get-prepped", { apocalypses })
      })
      .catch(err => {
        console.log(err)
        res.status(500).render("error-500")
      });
}
