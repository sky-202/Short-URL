const mongoose = require("mongoose")

const userShema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("user", userShema)

module.exports = User;