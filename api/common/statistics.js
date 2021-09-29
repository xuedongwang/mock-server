const faker = require('faker/locale/zh_CN');
// http://marak.github.io/faker.js/

module.exports = {
  name: '数据统计',
  method: 'get',
  timeout: 1000,
  category: 'common',
  data: {
    code: 0,
    message: 'success',
    data: {
      articleCount: faker.datatype.number(),
      categoryCount: faker.datatype.number(),
      commentCount: faker.datatype.number()
    }
  }
}