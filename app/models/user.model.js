module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            username: String,
            name: String,
            userlevel: String,
            attempts: Number,
            autologout: Number,
            expiry: Number,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Users = mongoose.model("users", schema);
    return Users;
};