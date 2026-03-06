'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [
      {
        name: 'ADMIN',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'PROVIDER',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'USER',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};