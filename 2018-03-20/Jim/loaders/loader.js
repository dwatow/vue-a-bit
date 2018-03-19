import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';
import path from 'path';

const schema = {
  type: 'object',
  properties: {
    test: {
      type: 'string'
    }
  }
}

export default function(source) {
  var callback = this.async();
  var headerPath = path.resolve('header.js');

  this.addDependency(headerPath);

  fs.readFile(headerPath, 'utf-8', function(err, header) {
    if(err) return callback(err);
    callback(null, header + "\n" + source);
  });

  return `export default ${ JSON.stringify(source) }`;
};
