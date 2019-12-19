const dbConnection = require('../../model/db_connection');

// getApocs returns promise to handle at level of controller
const getApocs = () => {
  return dbConnection.query('SELECT apocalypse_type FROM apocalypses;')
}

const getPrepper = (prepperId) => {
  return dbConnection.query('SELECT prepper_name, hashed_password, star_sign, movie FROM preppers;')
}

const getPrepperPreps = (prepperId) => {
  return dbConnection.query(
    'SELECT prep_name,description,prep_type,image_url FROM preps WHERE prep_id IN (SELECT prep_id FROM bridge WHERE prepper_id = $1);',
    [prepperId]
  )
}

const getPreps = (apocalypseType) => {
  return dbConnection.query(
    'SELECT prep_name,description,prep_type,image_url FROM preps WHERE prep_id IN (SELECT prep_id FROM bridge WHERE apocalypse_id = (SELECT apocalypse_id FROM apocalypses WHERE apocalypse_type = $1));',
    [apocalypseType]
  )
}

module.exports = {
  getApocs,
  getPrepper,
  getPrepperPreps,
  getPreps
}
