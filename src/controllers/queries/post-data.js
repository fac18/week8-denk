const dbConnection = require("../../model/db_connection");

const addPrep = (prepperId, newPrep) => {
  dbConnection.query(
    "INSERT INTO preps (prep_name, description, prep_type, image_url) VALUES ($1, $2, $3, $4); INSERT INTO bridge (author_id, prep_id, apocalypse_id) VALUES ($5, (SELECT prep_id FROM preps WHERE prep_name=$1),(SELECT apocalypse_id FROM apocalypses WHERE apocalypse_type=$6))",
     [newPrep.name, newPrep.description, newPrep.type, newPrep.image, prepperId, newPrep.apocalypse],
  )
};

module.exports = { addPrep };
