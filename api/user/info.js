const faker = require('faker/locale/zh_CN');
// http://marak.github.io/faker.js/

module.exports = {
  name: '获取用户信息',
  method: 'get',
  timeout: 1000,
  category: 'user',
  data: {
    code: 0,
    message: 'success',
    data: {
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
      description: faker.name.jobDescriptor(),
      address: faker.address.city()
    }
  }
}