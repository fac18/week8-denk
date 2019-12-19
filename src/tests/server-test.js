const test = require("tape");
const request = require("supertest");
const app = require("../app");

test("/ will load with 200", t => {
  request(app)
    .get("/")
    .expect(200)
    .end((err, res) => {
      t.error(err);
      t.deepEqual(res.statusCode, 200, "/ should load with 200");
      t.end();
    });
});
