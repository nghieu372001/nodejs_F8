const Course=require('../models/Course'); // import model chứa dữ liệu(mongodb)
const {mongooseToObject} =require('../../ulti/mongoose')

class CourseController{

    //GET /courses/:slug
    show(req,res,next) {
        Course.findOne({ slug:req.params.slug })   //findOne tìm một bản ghi tương ứng với slug
            .then (course=>{
                res.render('courses/show',{course:mongooseToObject(course)})  //render ra 'courses/show' file handelbar
            })
            .catch(next)
    } 

    //GET /courses/create
    create(req,res,next) {
        res.render('courses/create');
    } 
    

    //POST /courses/store
    store(req,res,next) {
        const formData=req.body;
        formData.image=`https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
        const course= new Course(formData);
        course.save() // .save() trả về 1 promise
            .then(() => res.redirect('/'))  // thành công thực hiện việc chuyển hướng về home
            .catch(error =>{})
    } 

    //GET /courses/:id/edit
    edit(req,res,next) {
        Course.findById(req.params.id) // findID vì khi chỉnh sửa xác định bằng id của khóa học,req.params.id điều kiện tìm Id
            .then(course => res.render('courses/edit',{course:mongooseToObject(course)}))// render ra file courses/edit (handelbar))
            .catch(next);
    }
    
    //PUT /courses/:id
    update(req,res,next) {
        Course.updateOne({_id:req.params.id},req.body)
            .then(()=>res.redirect('/me/stored/courses'))
            .catch(next)
    } 


    //DELETE /courses/:id
    delete(req,res,next){
        Course.delete({_id:req.params.id}) // phương thức xóa giả của thư viện mongoose-delete
            .then(()=>res.redirect('back'))
            .catch(next);
    }


    //DELETE /courses/:id
    forceDelete(req,res,next){
        Course.deleteOne({_id:req.params.id}) //deleteOne của mongoose là xóa thật
        .then(()=>res.redirect('back'))
        .catch(next);
    }

    //PATCH /courses/:id/restore
    restore(req,res,next){
        Course.restore({_id:req.params.id}) //restore là phương thức khôi phục khi bị xóa giả của thư viện mongoose-delete
        .then(()=>res.redirect('back'))
        .catch(next);
    }
}



module.exports=new CourseController