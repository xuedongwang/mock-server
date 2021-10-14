const faker = require('faker/locale/zh_CN');
// http://marak.github.io/faker.js/

module.exports = {
  name: '编辑用户信息',
  method: 'post',
  timeout: 1000,
  category: 'user',
  data: {
    code: 0,
    message: 'success',
    data: {}
  }
}