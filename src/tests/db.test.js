const test = require("tape");
const runDbBuild = require("../model/db_build.js");
const { getApocs, getPreps, getPrepperPreps, getPrepper } = require("../controllers/queries/get-data.js");
const postData = require("../controllers/queries/post-data.js");
const dbConnection = require("../model/db_connection.js");

test("tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

test("select all data from preppers table", t => {
  runDbBuild((err, res) => {
    t.error(err, "No error");
    const expected = [
      {
        prepper_id: 1,
        prepper_name: "Maria",
        hashed_password:
          "$2y$12$rNlZJapyFS2XfHJ8fIeDOOeg0Vs.dO31v1Mv84AuT3xlNWUcJRBQC",
        star_sign: "Aquarius",
        movie: "Resident Evil"
      },
      {
        prepper_id: 2,
        prepper_name: "Jamie",
        hashed_password:
          "$2y$12$etQ8BfHuFZE5anbprJ8MzeitMh3G/Txqi0gclaimBUGxEN1wLlEcS",
        star_sign: "Leo",
        movie: "Waterworld"
      },
      {
        prepper_id: 3,
        prepper_name: "Reggie",
        hashed_password:
          "$2y$12$1MBVnXoVF2VfGXFK/Ua7mOiu7jZTfEahzqzhhOCowA390o0FLCdPO",
        star_sign: "Sagittarius",
        movie: "Titanic"
      },
      {
        prepper_id: 4,
        prepper_name: "Dan",
        hashed_password:
          "$2y$12$l.4x/AfrnClssczdWZeyWebzJuiRcE1HrU0F3UEMqguqdxBWEaRZu",
        star_sign: "Virgo",
        movie: "Mad Max: Fury Road"
      }
    ];
    getPreps((err, result) => {
      if (err) console.log(err);
      t.deepEqual(result, expected, "returns expected user data");
      t.end();
    });
  });
});

test("insert user into the database", t => {
  runDbBuild((err, res) => {
    t.error(err, "No error");
    getData((err, result) => {
      if (err) console.log(err);
      t.deepEqual(result.length, 4, "length of result is 4");
    });
    postData(
      "Kin",
      "$2d$12$l.4x/AfrnClssczdWZeyWebzJuiRcE1HrU0F3UEMqguqdxBWEaRZu",
      "Leo",
      "Zombieland",
      (err, res) => {
        if (err) console.log(err);
        getData((err, result) => {
          if (err) console.log(err);
          t.deepEqual(result.length, 5, "new length is 5");
          t.end();
        });
      }
    );
  });
});
