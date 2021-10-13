const faker = require('faker/locale/zh_CN');
// http://marak.github.io/faker.js/

const list = [];
const types = ['image/png', 'application/zip', 'application/pdf', 'video/mp4', 'audio/wav', 'unknown'];
for (let i = 0; i < 20; i++) {
  list.push({
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    description: faker.hacker.phrase(),
    type: types[i % types.length],
    src: faker.image.imageUrl(),
    size: 1000,
    dimensions: '4517×8465像素',
    author: faker.name.firstName(),
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
  });
}

module.exports = {
  name: '留言消息',
  method: 'get',
  timeout: 1000,
  category: 'source',
  data: {
    code: 0,
    message: 'success',
    data: {
      total: 1000,
      list
    }
  }
}