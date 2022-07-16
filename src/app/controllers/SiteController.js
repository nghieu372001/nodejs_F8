const Course=require('../models/Course'); // import model chứa dữ liệu(mongodb)
const {mutipleMongooseToObject} =require('../../ulti/mongoose')

class SiteController{
    //GET /
    index(req,res,next) { //index() là 1 function, đoạn này = (req, res) => {res.render('search')}
        //res.render('home');
        //Lấy dữ liệu từ MongoDB
        //Sử dụng callback
        // Course.find({}, function (err,courses){
        //     if(!err){
        //         console.log(err);
        //         res.json(courses)  //không có lỗi thì chạy
        //     }
        //     else{
        //         next(err);
        //     }
        // });

        //Sử dụng Promise
        Course.find({})
            .then(courses =>{
                res.render('home',{courses:mutipleMongooseToObject(courses)}); // home là file handlerbar,courses trả về 1 mảng gồm các phần tử khóa học
            }) 
            .catch(next); 
    }

    //GET /search
    search(req,res) {
        res.render('search');
    }
}



module.exports=new SiteController