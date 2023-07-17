import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true
    },
    extract: {
        type: String,
        require: true
    },
    thumbnail: {
        type: String,
        require: true
    },
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
    },


},
    {
        timestamps: true,
        versionKey: false,
    },
)

export default mongoose.model("Movies", productSchema)