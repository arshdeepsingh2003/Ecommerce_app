import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }
}, { minimize: false })//This means if an object field in your schema is empty (e.g., {}),
//  it will not be stored in the database at all.

const userModel = mongoose.models.user || mongoose.model('user',userSchema);

export default userModel