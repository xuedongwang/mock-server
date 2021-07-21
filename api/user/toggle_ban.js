const faker = require('faker');
// http://marak.github.io/faker.js/

module.exports = {
  name: '封禁/取消封禁用户',
  method: 'get',
  timeout: 1000,
  category: 'user',
  data: {
    code: 0,
    message: 'success',
    data: {}
  }
}