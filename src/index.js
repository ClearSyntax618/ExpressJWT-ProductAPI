import app from "./app.js";

app.listen(app.get("port"));
console.log("Working on port", app.get("port"));