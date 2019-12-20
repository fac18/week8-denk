# DENK

![](https://api.travis-ci.org/fac18/week8-denk.svg?branch=master)
[![codecov](https://codecov.io/gh/fac18/week8-denk/branch/master/graph/badge.svg)](https://codecov.io/gh/fac18/week8-denk)

---
We are Jamarad
{:skull:Dan, 
:skull:Jamie, 
:skull:Maria, 
:skull:Reggie}; 

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
