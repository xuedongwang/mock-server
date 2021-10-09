const faker = require('faker/locale/zh_CN');
// http://marak.github.io/faker.js/

module.exports = {
  name: '留言消息',
  method: 'get',
  timeout: 1000,
  category: 'article',
  data: {
    code: 0,
    message: 'success',
    data: {
      id: faker.datatype.uuid(),
    }
  }
}