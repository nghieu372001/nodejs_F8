const express=require('express'); // import framework express


const router=express.Router(); //import funcion Router trong thư viện express


const meController=require('../app/controllers/MeController'); // import file NewsController.js trong thư mục app/controller


//Xử dụng các hanlder(funtion) được định nghĩa trong CourseController trong thư mục app/controller
router.get('/stored/courses',meController.storedCourses);
router.get('/trash/courses',meController.trashCourses);

module.exports=router; 