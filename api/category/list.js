const faker = require('faker/locale/zh_CN');
// http://marak.github.io/faker.js/

const list = [];

for (let i = 0; i < 120; i++) {
  list.push({
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
  });
}

module.exports = {
  name: '分类列表',
  method: 'get',
  timeout: 800,
  category: 'category',
  data: {
    code: 0,
    message: 'success',
    data: {
      total: 1000,
      list
    }
  }
}