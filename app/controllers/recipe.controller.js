const db = require("../models");
const Recipe = db.recipe;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.recipe_name) {
        res.status(400).send({ message: "recipe_name can not be empty!" });
        return;
    }

    // Create a Tutorial
    const recipe = new Recipe({
        "recipe_name": req.body.recipe_name,
        "product_name": req.body.product_name,
        "tooling_drg_no": req.body.tooling_drg_no,
        "size": req.body.size,
        "thickness_range": req.body.thickness_range,
        "weight_range": req.body.weight_range,
        "hardness": req.body.hardness,
        "humidity": req.body.humidity,
        "room_temp": req.body.room_temp,
        "dt_range": req.body.dt_range,
        "angle_of_repose": req.body.angle_of_repose
    });

    // Save recipe in the database
    recipe
        .save(recipe)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the recipe."
            });
        });
};