//importo express
const express = require('express');

// inmporto los controllers
const {
  getAllCourses,
  getCoursesByLanguage,
  getCoursesByLanguageAndLevel,
  creteCourse,
  updateFullCourse,
  updateCourseProperties,
  deleteCourse
} = require('../controllers/programming')

//  *********** Routers *******
const routerProgramming = express.Router() //creo router

// ******* Indico tipos de bodys a procesar (Middleware) ****** 

routerProgramming.use(express.json()) //proceso JSON

// ****** Routing de este router/objeto******

routerProgramming.get('/', getAllCourses)

routerProgramming.get('/:language', getCoursesByLanguage)


routerProgramming.get('/:language/:level', getCoursesByLanguageAndLevel)

// post method
routerProgramming.post('/', creteCourse)

// put method
routerProgramming.put('/:id', updateFullCourse)

// patch method
routerProgramming.patch('/:id', updateCourseProperties)


// delete method
routerProgramming.delete('/:id', deleteCourse)




// ******** Exporto router **********
module.exports = routerProgramming //lo asigno directamente al objeto exports, para importarlo de una