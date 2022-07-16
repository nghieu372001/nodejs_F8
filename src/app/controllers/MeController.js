const Course=require('../models/Course'); // import model chứa dữ liệu(mongodb)
const {mutipleMongooseToObject} =require('../../ulti/mongoose')

class MeController{
    //GET  /me/stored/courses
    storedCourses(req,res,next) {

        Promise.all([Course.find({}),Course.countDocumentsDeleted()]) //--> trả về 1 mảng, cách gộp của 2 promise ở dưới
            .then(([courses,deleteCount])=>{res.render('me/stored-courses',{deleteCount:deleteCount,courses:mutipleMongooseToObject(courses)})})
            .catch((next));

            
        // Course.countDocumentsDeleted()
        //     .then((deleteCount)=>{
        //         res.render('me/stored-courses',{deleteCount:deleteCount})
        //     })
        //     .catch(next)

        // Course.find({}) //Course.find tìm các bản ghi với {} trong find là điều kiện để hiển thị các bản ghi đó
        //     .then(courses =>res.render('me/stored-courses',{courses:mutipleMongooseToObject(courses)}))
        //     .catch(next);

        
    } 


    //GET  /me/trash/courses
    trashCourses(req,res,next){
        Course.findDeleted({}) // {} trong find là điều kiện để hiển thị
            .then(courses =>res.render('me/trash-courses',{courses:mutipleMongooseToObject(courses)}))
            .catch(next);
    }
}



module.exports=new MeController