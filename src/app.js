const express = require('express');
const method = require('method-override');
const path = require('path');
const app = express();

app.set("port",process.env.PORT || 3000);
app.listen(app.get("port"), () => console.log("Server on http://localhost:"+app.get("port")));

app.set("view engine","ejs");
app.set("views",path.resolve(__dirname,"views"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(method("_method"));

app.use(require('./routes/main'));
