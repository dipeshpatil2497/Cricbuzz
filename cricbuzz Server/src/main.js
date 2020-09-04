const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const dbadd = require("./adduser");
const dbread = require("./readuser");

app.post("/adduser", async (req, res) => {
    try {

        const input = req.body;

        await dbadd.addUser(input);

        res.json({ message: "success" });

    } catch (err) {
        res.json({ message: "failure" });
    }

});

app.listen(3000);

