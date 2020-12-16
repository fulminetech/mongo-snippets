const db = require("../models");
const Recipe = db.recipe;

// Create and Save a new Recipe
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

// Retrieve all Recipes from the database.
exports.findAll = (req, res) => {
    const recipe_name = req.query.recipe_name;
    var condition = recipe_name ? { recipe_name: { $regex: new RegExp(recipe_name), $options: "i" } } : {};

    Recipe.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Recipe."
            });
        });
};

// Update a Recipe by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Recipe.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Recipe with id=${id}. Maybe Recipe was not found!`
                });
            } else res.send({ message: "Recipe was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Recipe with id=" + id
            });
        });
};

// Delete a Recipe with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Recipe.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Recipe with id=${id}. Maybe Recipe was not found!`
                });
            } else {
                res.send({
                    message: "Recipe was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Recipe with id=" + id
            });
        });
};