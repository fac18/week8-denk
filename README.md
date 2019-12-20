# DENK

![](https://api.travis-ci.org/fac18/week8-denk.svg?branch=master)
[![codecov](https://codecov.io/gh/fac18/week8-denk/branch/master/graph/badge.svg)(https://codecov.io/gh/fac18/week8-denk)

---

:skull:[Dan](https://github.com/redwedge)
:skull:[Jamie](https://github.com/jc2820)
:skull:[Maria](https://github.com/marialani)
:skull:[Reggie](https://github.com/ReginaldJbeili)

---

## Installation Guide 

1. Clone this repo
2. In the root directory, create a .env file with the PostgreSQL URL DB_URL=postgres://url_to_whatever_database_you_have_access
3. To build the database ```npm run db_init```
4. ```npm start```
5. In browser open localhost:3002

---

## Requirements

* Build an app using the Express framework.
* Use a PostgreSQL database to store and retrieve data.
* Use the retrieved data to populate a Handlebars template to be displayed on the front-end.
* Testing and coverage
* Hosted on Heroku

---

## User Stories

- The user would visit our site to get saved from a potential apocalypse
- The user can do one of three things:
    - choose an apocalypse relevant to the current scenario and see all available preparations aka preps necessary to survive
    - create a prep profile
    - login to:
        - view the user's own profile
        - create a prep
- The user can do at any point:
    - view what we are about
    - view their own profile(if they're logged in) 

---

In a world where every corner you turn to is despair and desolation...

In a place where hope is dire and days are bleak...

We shall provide you with a sliver of hope...

We are the final frontier for humanity...

We are **JAMARAD**.

---

## What is Prepper?

- The user would visit our site to get saved from a potential apocalypse
- The user can do one of three things:
    - choose an apocalypse relevant to the current scenario and see all available preparations aka preps necessary to survive
    - create a prep profile

---

- login to:
    - view the user's own profile
    - create a prep
- The user can do at any point:
    - view what we are about
    - view their own profile(if they're logged in)

---

## Brainstorming and planning

### Ideas

![](https://i.imgur.com/SbWLFzH.jpg)

---

### File architecture

![](https://i.imgur.com/4F0QUOJ.jpg)

---

### Database schema

![](https://i.imgur.com/XkyPe9e.jpg)

---

## Design challenge: user-flow and wireframing

![](https://i.imgur.com/i5OqSqZ.jpg)

---

![](https://i.imgur.com/Gc5iSMp.jpg)

---

![](https://i.imgur.com/ZeymOoX.jpg)

---
### Accessibility

![](https://i.imgur.com/B8nSYrL.png)

---

By Wednesday evening we had a solid plan about our user journey and page structure, and had successfully built our database and architecture.

---

On Thursday am we paired up, swapping around the tasks of building the express server and handlebars layout, making the views and writing tests.

---

Thursday afternoon was all about finishing views, getting database information to populate the various pages and eventually attempting to zombify the css.

---

## Promise.all

```javascript=
Promise.all([getPrepperPreps(prepperId),getPrepper(prepperId)])
  .then(values => {
    // take actual rows out of query results
    values[0] = values[0].rows
    values[1] = values[1].rows[0]
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
```

---

## Wild times with SQL

We had an error: _cannot insert multiple commands into a prepared statement_

```javascript
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
```

---

## db_build.sql

```javascript=
CREATE TABLE preppers (
  prepper_id SERIAL PRIMARY KEY,
  prepper_name VARCHAR NOT NULL,
  hashed_password VARCHAR NOT NULL,
  star_sign VARCHAR NOT NULL,
  movie VARCHAR NOT NULL
);

CREATE TABLE preps (
  prep_id SERIAL PRIMARY KEY,
  prep_name VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  prep_type VARCHAR NOT NULL,
  image_url VARCHAR
);

CREATE TABLE apocalypses (
  apocalypse_id SERIAL PRIMARY KEY,
  apocalypse_type VARCHAR NOT NULL
);

CREATE TABLE bridge (
  bridge_id SERIAL PRIMARY KEY,
  prepper_id INTEGER REFERENCES preppers(prepper_id),
  prep_id INTEGER REFERENCES preps(prep_id),
  apocalypse_id INTEGER REFERENCES apocalypses(apocalypse_id)
);

```

---

## get-data.js

```javascript=
const getPrepperPreps = (prepperId) => {
  return dbConnection.query(
    'SELECT prep_name,description,prep_type,image_url FROM preps WHERE prep_id IN (SELECT prep_id FROM bridge WHERE prepper_id = $1);',
    [prepperId]
  )
}
```

---

## into the wasteland...

* Add authorisation and logged in sessions.
* View all profiles, view all preps
* Mobile responsiveness
* Dump preps to PDF feature for easy hard-copy prep creation.
