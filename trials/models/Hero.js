const mongoose = require("mongoose");


const HeroSchema = new mongoose.Schema({
    superHero:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    realName:{
        type:String,
        required:true,
        maxLength:[200,"Please keep it short for the real name"]
    }
})

module.exports= mongoose.models.Hero || mongoose.model("Hero",HeroSchema)