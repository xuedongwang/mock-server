const faker = require('faker');
// http://marak.github.io/faker.js/

module.exports = {
  name: '登录',
  method: 'get',
  timeout: 1000,
  category: 'user',
  data: {
    code: 0,
    message: 'success',
    data: {}
  }
}