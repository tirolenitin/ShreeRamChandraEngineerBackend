import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        trim:true,
        lowercase:true
    },
    phone:{
        type:Number,
        required:[true,"Number  is required"],
        trim:true,
        validate: {
            validator: function(v) {
              return /^\d{10,}$/.test(v); // Validate if phone number has 10 or more digits
            },
            message: props => `${props.value} is not a valid phone number.`
          }
    },
    date:{
        type:String,
    },
    message:{
        type:String,
        required:[true]
    },
    info:String
})

const contactSchemaModel = mongoose.model("contactSchema",contactSchema);

export default contactSchemaModel;