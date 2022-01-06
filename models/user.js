const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    user_id : String,
    name: String,
    product : String
});

module.exports = mongoose.model("User", UserSchema);