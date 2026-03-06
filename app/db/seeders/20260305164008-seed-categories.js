'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Plumbing',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Electrical',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Cleaning',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Appliance Repair',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};