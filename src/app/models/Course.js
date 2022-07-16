const mongoose=require('mongoose');
const mongooseDelete = require('mongoose-delete');

// Tự động tạo slug
const slug=require('mongoose-slug-generator');




const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Course = new Schema({   // khởi tạo lược đồ
  name: {type:String, required:true}, // required:true : trường bắt buộc nhập
  description: {type:String},//maxLength: tối đa bao nhiêu ký tự
  videoID: {type:String, required:true}, 
  level: {type:String},  
  image: {type:String},
  deletedAt: {type:Date},
  slug: { type: String, slug: 'name', unique:true }, // slug: "name" là lấy name làm slug, unique:true : slug là duy nhất, không được trùng nhau
},{timestamps:true,});



//Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete,{
  overrideMethods:'all',
  deletedAt:true,
});


module.exports=mongoose.model('Course', Course);
