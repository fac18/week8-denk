const app = require("./app");

app.set("port", process.env.PORT || 3003);

app.listen(app.get("port"), () => {
    console.log("App running on port", app.get("port"));
})
