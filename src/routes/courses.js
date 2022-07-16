const express=require('express'); // import framework express


const router=express.Router(); //import funcion Router trong thư viện express


const courseController=require('../app/controllers/CourseController'); // import file NewsController.js trong thư mục app/controller


//Xử dụng các hanlder(funtion) được định nghĩa trong CourseController trong thư mục app/controller
router.get('/create',courseController.create); 
router.get('/:slug',courseController.show); //:slug là tham số động
router.post('/store',courseController.store);
router.get('/:id/edit',courseController.edit);
router.put('/:id',courseController.update);
router.patch('/:id/restore',courseController.restore);
router.delete('/:id',courseController.delete);
router.delete('/:id/force',courseController.forceDelete);
module.exports=router; 