console.log(process);

console.log(process.env);

console.log(process.argv); //node 04_mod..... [node_path, file_path, arg1, arg2, ....]
// [0, 1, 2, 3]

// para procesar un numero indefinido de argumentos

for (let i=2; i < process.argv.length; i++) {
  console.log(process.argv[i]);
}

console.log(process.memoryUsage());