import mongoose, { Schema } from 'mongoose';

const CategorySchema = new Schema({
    category : { type : String, required : true },
});


export default mongoose.model('Categories', CategorySchema, 'Categories');