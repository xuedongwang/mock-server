const faker = require('faker/locale/zh_CN');
// http://marak.github.io/faker.js/

module.exports = {
  name: '删除用户',
  method: 'get',
  timeout: 800,
  category: 'user',
  data: {
    code: 0,
    message: 'success',
    data: {}
  }
}