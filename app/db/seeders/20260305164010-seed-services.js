'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('services', [
      {
        title: 'Pipe Leak Repair',
        category_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Fan Installation',
        category_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'House Cleaning',
        category_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Washing Machine Repair',
        category_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('services', null, {});
  }
};