
// creo objeto URL
const miURL = new URL('https://www.example.org/courses/programming?sort=views&level=1') //e.g., filtro cursos por su total de vitas, y de nivel basico

console.log(miURL.hostname); // accedo a root de URL
console.log(miURL.pathname); // accedo a path de URL
console.log(miURL.searchParams); // accedo a los query params de la URL
console.log(miURL.searchParams.get('sort')); // indexo uo a uno cada query param
console.log(miURL.searchParams.get('level')); // indexo uo a uno cada query param
