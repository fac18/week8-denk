const { getPrepper, getPrepperPreps } = require('./queries/get-data')

exports.get = (req, res) => {
  // let prepperId = request.session.id;
  let prepperId = 1; // hardcode for now

  Promise.all([getPrepperPreps(prepperId),getPrepper(prepperId)])
    .then(values => {
      // take actual rows out of query results
      values[0] = values[0].rows
      values[1] = values[1].rows[0]
      //console.log('this is values', values)
      //console.log(values[0][0], "this is values 0,0")
      return values;
    })
    .then(values => {
      // render profile with appropriate data passed into options
      res.render('profile', {
        preps: values[0], // an array of prep objects
        prepper: values[1], // a single prepper object
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).render("error-500")
    })
};
