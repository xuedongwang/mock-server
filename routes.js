const glob = require('glob')

let files = [];

try {
  files = glob.sync(`${__dirname}/api/**/*.js`, {}).map(path => path.replace(__dirname, '.'));
} catch(err) {
  throw err;
}
let result = [];
result = files.map(file => {
  let path = file;
  if (file.endsWith(('index.js'))) {
    path = file.replace('/index', '')
  }
  path = path.replace(/^\./, '');
  path = path.replace(/\.js$/, '');
  return {
    ...require(file),
    path
  } || {}
})

module.exports = result