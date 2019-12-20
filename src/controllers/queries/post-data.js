const dbConnection = require("../../model/db_connection");

const addPrep = (prepperId, newPrep) => {
  return dbConnection.query(
    "INSERT INTO preps (prep_name, description, prep_type, image_url) VALUES ($1, $2, $3, $4);",
     [newPrep.name, newPrep.description, newPrep.type, newPrep.image]
  ).then(() => {
    return dbConnection.query(
      'INSERT INTO bridge (prepper_id, prep_id, apocalypse_id) VALUES ($1, (SELECT prep_id FROM preps WHERE prep_name=$2),(SELECT apocalypse_id FROM apocalypses WHERE apocalypse_type=$3));',
      [prepperId, newPrep.name, newPrep.apocalypse]
    )
  }).catch(console.log);
};

module.exports = { addPrep };
