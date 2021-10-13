const faker = require('faker/locale/zh_CN');
// http://marak.github.io/faker.js/

const list = [];

for (let i = 0; i < 120; i++) {
  list.push({
    id: faker.datatype.uuid(),
    username: faker.name.firstName(),
    description: faker.hacker.phrase(),
    createUser: faker.internet.userName(),
    status: 1, // 1: 正常 2: 被冻结
    email: faker.internet.email(),
    role: '管理员',
    articleCount: faker.datatype.number(),
    categoryCount: faker.datatype.number(),
    tagCount: faker.datatype.number(),
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime()
  });
}

module.exports = {
  name: '用户列表',
  method: 'get',
  timeout: 800,
  category: 'user',
  data: {
    code: 0,
    message: 'success',
    data: {
      total: 1000,
      list
    }
  }
}