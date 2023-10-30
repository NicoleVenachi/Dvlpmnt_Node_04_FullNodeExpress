
const getAllCourses =  (req,res) => { //programming courses
  res.json(programming) //envio pero antes de Tx lo paso a texto
}

const getCoursesByLanguage = (req,res) => { //handle :URL PARAMETERS

  // console.log(req.params);
  const language = req.params.language //saco los url params

  const coursesToShow = programming.filter(course => course.language === language) //filtro info del curso buscado

  //mando results

  if (coursesToShow.length === 0) {
    //res.status(404); // not found resource (envio rta en una unica linea)
    return res.status(404).send(`No ${language} courses found `)
  }

  if (req.query.sort === 'views') {//saco ?QUERY PARAMETERS y ordeno de acuerdo al criterio
    return res.json( coursesToShow.sort((a,b)=> a.views - b.views)) // b-a, descendente; a=b, ascendente
  }


  res.json(coursesToShow) //
}


const getCoursesByLanguageAndLevel = (req,res) => { //handle :URL PARAMETERS (filtrar por 2 URL params)

  // console.log(req.params);
  const {language, level} = req.params //saco los url params



  const coursesToShow = programming.filter(course => ((course.language === language) && (course.level === level)) ) //filtro info del curso buscado

  //mando results

  if (coursesToShow.length === 0) {
    //res.status(404); // not found resource (envio rta en una unica linea)
    return res.status(204).send(`No ${level} level ${language} courses found `)
  }

  res.json(coursesToShow) //
}


const creteCourse = (req, res) => { 
  
  let newCourse = req.body;//saco el new course del body

  programming.push(newCourse) //agrego a la data sored

  res.json(programming) //mando como rta todos los cursos
}


const updateFullCourse =  (req, res) => { 
  
  const {id} = req.params
  let courseToUpdate = req.body;//saco el new course del body

  const dataStoredArrayId = programming.findIndex((course) => course.id == id) //find id from an element into an array (data en programming es un array de objetos)


  if (dataStoredArrayId >= 0){ //sino se encuentra id,envía -1
    programming[dataStoredArrayId] = courseToUpdate //actualizo el en esa posicion con la new info
  }

  res.json(programming) //mando como rta todos los cursos
}

const updateCourseProperties = (req, res) => { //post de
  
  const {id} = req.params
  let infoToUpdate = req.body;//saco el new course del body

  const dataStoredArrayId = programming.findIndex((course) => course.id == id) //find id from an element into an array (data en programming es un array de objetos)


  if (dataStoredArrayId >= 0){ //sino se encuentra id,envía -1
    const courseToUpdate = programming[dataStoredArrayId] //saco el curso correspondiente a ese id

    Object.assign(courseToUpdate, infoToUpdate) // permite atualizar un objeto dentro de otro objeto, fuente que tenga esas mismas keys
  }
  else {
    res.status(404) //not found del recurso
  }

  res.json(programming) //mando como rta todos los cursos
}


const deleteCourse = (req, res) => { //post de
  
  const {id} = req.params

  const dataStoredArrayId = programming.findIndex((course) => course.id == id) //find id from an element into an array (data en programming es un array de objetos)


  if (dataStoredArrayId >= 0){ //sino se encuentra id,envía -1
    programming.splice(dataStoredArrayId, 1) //delete con splice, cortando en ese id un elemento
  }

  res.json(programming) //mando como rta todos los cursos
}


module.exports = {
  getAllCourses,
  getCoursesByLanguage,
  getCoursesByLanguageAndLevel,
  creteCourse,
  updateFullCourse,
  updateCourseProperties,
  deleteCourse
}