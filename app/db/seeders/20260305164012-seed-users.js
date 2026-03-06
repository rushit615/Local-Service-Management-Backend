'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {

    const password = await bcrypt.hash('123456', 10);

    await queryInterface.bulkInsert('users', [
      {
        first_name: 'Admin',
        last_name: 'User',
        email: 'admin@test.com',
        password: password,
        role_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: 'John',
        last_name: 'Provider',
        email: 'provider@test.com',
        password: password,
        role_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: 'Jane',
        last_name: 'Customer',
        email: 'customer@test.com',
        password: password,
        role_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};