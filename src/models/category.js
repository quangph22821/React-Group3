import { ref } from "joi";
import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema(
    {
        name: {
            type: String,
            require: true,
            minLength: 3,
        },
        image:{
            type: String,
            require:true
        },
        products:[

            {
                type: mongoose.Types.ObjectId,
                ref: "Products"
            }
            
        ] 
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

export default mongoose.model("Category", categorySchema);