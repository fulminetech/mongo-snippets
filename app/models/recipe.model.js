module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            recipe_name: String,
            product_name: String,
            tooling_drg_no: Number,
            size: Number,
            thickness_range: String,
            weight_range: String,
            hardness: Number,
            humidity: Number,
            room_temp: Number,
            dt_range: String,
            angle_of_repose: Number
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Recipe = mongoose.model("recipe", schema);
    return Recipe;
};