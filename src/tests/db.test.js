const test = require("tape");
const runDbBuild = require("../model/db_build.js");
const { getApocs, getPreps, getPrepperPreps, getPrepper } = require("../controllers/queries/get-data.js");
const { addPrep } = require("../controllers/queries/post-data.js");
const dbConnection = require("../model/db_connection.js");

test("tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

// get-data.getPrepper
test("select a prepper from preppers table", t => {
  runDbBuild((err, res) => {
    t.error(err, "No error");
    const expected = {
        prepper_name: "Reggie",
        hashed_password:
          "$2y$12$1MBVnXoVF2VfGXFK/Ua7mOiu7jZTfEahzqzhhOCowA390o0FLCdPO",
        star_sign: "Sagittarius",
        movie: "Titanic"
    }
    getPrepper(3)
      .then(res => res.rows[0])
      .then(prepper => {
        t.deepEqual(prepper, expected, "returns Reggie");
      })
      .catch(console.log)
      t.end();
  });
});

// post-data.addPrep
test('add a new prep', t => {
  runDbBuild((err,res) => {
    t.error(err, "No error");
    const newPrep = {
      name: 'Mega-rice seeds',
      description: 'Hardcore GM uber-resistant mega-rice, last product of Monsanto before the fall',
      type: 'item',
      image: 'https://royalsociety.org/~/media/policy/projects/gm-plants/golden%20rice-gm-compared-with-non-gm-rice-c-FotografiaBasica.jpg',
      apocalypse: 'ecological'
    }
    // add prep, authored by Jamie (id 2)
    addPrep(2, newPrep)
      .then(res => {
        t.deepEqual(res.command, 'INSERT', 'new prep successfully added to database');
      })
      .catch(console.log)
      t.end();
  })
})

// post-data.addPrepper
// needs refitting with promises etc.
// test("insert user into the database", t => {
//   runDbBuild((err, res) => {
//     t.error(err, "No error");
//     getData((err, result) => {
//       if (err) console.log(err);
//       t.deepEqual(result.length, 4, "length of result is 4");
//     });
//     postData(
//       "Kin",
//       "$2d$12$l.4x/AfrnClssczdWZeyWebzJuiRcE1HrU0F3UEMqguqdxBWEaRZu",
//       "Leo",
//       "Zombieland",
//       (err, res) => {
//         if (err) console.log(err);
//         getData((err, result) => {
//           if (err) console.log(err);
//           t.deepEqual(result.length, 5, "new length is 5");
//           t.end();
//         });
//       }
//     );
//   });
// });
