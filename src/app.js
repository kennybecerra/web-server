const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const port = 3000;
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath);

app.use(express.static(path.join(__dirname, "../public")));


app.get("/weather", (req, res) => {
	res.send("Weather page")
})

app.get("/", (req, res) => {
	res.render("index", {
		title: "Weather App",
		name: "Kenny B"
	})
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}`)
});