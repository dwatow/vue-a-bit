const compiler = module.require('./compiler.js');
const path = module.require('path');

// async function go () {
//
//   const stats = await compiler('example.txt');
//   console.log(stats.toJson().modules.shift().source);
// }
// go ();

compiler('example.txt').then ((stats) => {
  const output = stats.toJson().modules.shift().source;
  console.log(output);
})



// console.log('__dirname: ', __dirname);
// console.log('path.resolve(__dirname): ', path.resolve(__dirname));
