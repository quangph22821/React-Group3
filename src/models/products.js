import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image:{
        type:String,
        require:true
    },
    size:{
        type:Array,
        require:true
    },
    color:{
        type:Array,
        require:true
    },
    category_Id: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
    },


},
    {
        timestamps: true,
        versionKey: false,
    },
)

export default mongoose.model("Products", productSchema)