
const testJSON = require('./01_test.json')//traigamos el JSON así en local

//console.log(testJSON);
console.log(typeof testJSON); //al importarlo es JSON

//cuirosemos pues el objeto
console.log(testJSON.temas);
console.log(testJSON.esPublico);

// convierto objeto en JSON (texto)
console.log(JSON.stringify(testJSON));
console.log(typeof JSON.stringify(testJSON));

// convierto JSON en objeto
console.log(JSON.parse(JSON.stringify(testJSON)));