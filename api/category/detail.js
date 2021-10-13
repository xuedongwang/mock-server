const faker = require('faker/locale/zh_CN');
// http://marak.github.io/faker.js/

module.exports = {
  name: '分类详情',
  method: 'get',
  timeout: 700,
  category: 'category',
  data: {
    code: 0,
    message: 'success',
    data: {
      id: faker.datatype.uuid(),
      title: faker.hacker.phrase(),
      description: faker.hacker.phrase(),
      author: faker.name.firstName(),
      readCount: faker.datatype.number(),
      isPublish: faker.datatype.boolean(),
      likes: faker.datatype.number(),
      dislikes: faker.datatype.number(),
      createdAt: faker.datatype.datetime(),
      updatedAt: faker.datatype.datetime()
    }
  }
}