const mongoose=require('mongoose');

async function connnet()
{
    try{
        await mongoose.connect('mongodb://localhost:27017/F8_EDUCATION_DEV'); // kết nối đến MongoDB
        console.log('Connect Successfully');
    }
    catch(err){
        console.log('Connect Failed!');
    }
}

module.exports={connnet};