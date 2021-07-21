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
    category: require(file).category || '未分类',
    path
  } || {}
})

const ret = [];
const m = new Map();
result.forEach(api => {
  if (m.has(api.category)) {
    const targetIndex = ret.findIndex(item => item.category === api.category);
    ret[targetIndex].count = ret[targetIndex].count + 1;
    ret[targetIndex].children.push(api);
  } else {
    m.set(api.category, true);
    ret.push({
      category: api.category,
      count: 1,
      children: [
        api
      ]
    })
  }
})


module.exports = {
  apis: result,
  apiStatistics: ret
}