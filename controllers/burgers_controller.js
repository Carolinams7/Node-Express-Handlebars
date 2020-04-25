var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

// select all burgers.
router.get("/", function (req, res) {
    burger.select(function (data) {
        // connect handlebars to send data to frontend.
        var handlebarObject = {
            burgers: data
        };

        res.render("index", handlebarObject)
    });
});

// create the burger.
router.post("/api/burger", function (req, res) {
    var column = "burger_name";
    var value = req.body.name;
    console.log(value);

    burger.create(column, value, function (data) {
        if (data.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
        // send the status to the frontend.
    })
});

// update the burger.
router.put("/api/burger/:id", function (req, res) {
    var id = req.params.id;
    var value = Boolean(req.body.devoured);
    var column = "devoured";

    burger.update(column, value, id, function (data) {
        if (data.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
        // send the status to the frontend.
    })
});

module.exports = router;