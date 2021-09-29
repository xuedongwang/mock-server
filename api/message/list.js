const faker = require('faker/locale/zh_CN');
// http://marak.github.io/faker.js/

const list = [];

for (let i = 0; i < 20; i++) {
  list.push({
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    from: faker.name.firstName(),
    avatar: faker.image.avatar(),
    message: faker.hacker.phrase(),
    likes: faker.datatype.number(),
    dislikes: faker.datatype.number(),
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
    isRead: faker.datatype.boolean()
  });
}

module.exports = {
  name: '留言消息',
  method: 'get',
  timeout: 1000,
  category: 'message',
  data: {
    code: 0,
    message: 'success',
    data: {
      total: 1000,
      list
    }
  }
}