const dbConnection = require("../../model/db_connection");

const addPrep = (newPrep, cb) => {
  dbConnection.query(
    "INSERT INTO preps (prep_name, description, prep_type, image_url) VALUES ($1, $2, $3, $4)",
     [newPrep.name, newPrep.description, newPrep.type, newPrep.image,], 
     (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = addPrep;
