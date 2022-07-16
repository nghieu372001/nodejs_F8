const express=require('express'); // import framework express


const router=express.Router(); //import funcion Router trong thư viện express


const newsController=require('../app/controllers/NewsController'); // import file NewsController.js trong thư mục app/controller


//Xử dụng các hanlder(funtion) được định nghĩa trong NewsController trong thư mục app/controller
router.get('/',newsController.index);
router.get('/:slug',newsController.show);


module.exports=router; 