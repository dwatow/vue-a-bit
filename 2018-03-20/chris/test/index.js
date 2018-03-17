const compiler = module.require('./compiler.js');

async function go () {

  const stats = await compiler('example.txt');
  console.log(stats.toJson().modules.shift().source);
}

go ();
