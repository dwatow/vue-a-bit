const txt = require('../test/example.txt');

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Hello';
  console.log(txt);

  return element;
}

document.body.appendChild(component());
