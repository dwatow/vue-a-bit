//import compiler from './compiler.js';
const compiler = module.require('./compiler.js');

test('Inserts name and outputs JavaScript', async function () {
  const stats = await compiler('example.txt');
  const output = stats.toJson().modules[0].source;
  console.log(output);

  expect(output).toBe(`export default "Hey Alice!\\n"`);
});
