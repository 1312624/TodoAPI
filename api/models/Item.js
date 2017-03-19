import mongoose, { Schema } from 'mongoose';
import mongooseTimestamp from 'mongoose-timestamp';

const ItemSchema = new Schema({
    title : { type : String, required : true },
    content : { type : String, required : true },
    categoryID : { type : Schema.Types.ObjectId },
});

ItemSchema.plugin(mongooseTimestamp,  {
  createdAt: 'created_at', 
  updatedAt: 'updated_at'
});

export default mongoose.model('Items', ItemSchema, 'Items');