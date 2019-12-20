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

test("/about will load with 200", t => {
  request(app)
    .get("/about")
    .expect(200)
    .end((err, res) => {
      t.error(err);
      t.deepEqual(res.statusCode, 200, "/about should load with 200");
      t.end();
    });
});

test("/login will load with 200", t => {
  request(app)
    .get("/login")
    .expect(200)
    .end((err, res) => {
      t.error(err);
      t.deepEqual(res.statusCode, 200, "/login should load with 200");
      t.end();
    });
});

test("/single-prep will load with 200", t => {
  request(app)
    .get("/single-prep")
    .expect(200)
    .end((err, res) => {
      t.error(err);
      t.deepEqual(res.statusCode, 200, "/single-prep should load with 200");
      t.end();
    });
});

test("/profile will load with 200", t => {
  request(app)
    .get("/profile")
    .expect(200)
    .end((err, res) => {
      t.error(err);
      t.deepEqual(res.statusCode, 200, "/profile should load with 200");
      t.end();
    });
});

test("/nonexistent endpoint should give 404", t => {
  request(app)
    .get("/jamie")
    .expect(404)
    .end((err, res) => {
      t.error(err);
      t.deepEqual(res.statusCode, 404, "a non-existent endpoint should send a 404");
      t.end();
    });
});

