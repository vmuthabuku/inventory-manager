const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    make:{
        type:String,
        required:true,
    },
    quantity:{
        type:String,
        required:true,
    },
    bodytype:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    startsell:{
        type:String,
        required:true

    },
    instock:{
        type:String,
        required:true
    },    
    mileage:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        default:'n/a'
    },
    color:{
        type:String,
        required:true        
    },
    description:{
        type:String,
        required:true        
    },
    ownerId:{
        type:String
    },
    image:{
        type:String
    }
},{timestamps:true})

const Car = mongoose.model('Car',carSchema )

module.exports = { Car }

