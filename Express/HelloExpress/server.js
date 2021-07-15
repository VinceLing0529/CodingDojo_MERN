const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;
// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );

const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];
  
app.get("/api/users", (req, res) => {
  res.json( users );
});

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );