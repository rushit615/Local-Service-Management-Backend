'use strict';

const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {

    const password = await bcrypt.hash('123456', 10);

    const users = [];

    for (let i = 0; i < 50; i++) {
      users.push({
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: password,
        role_id: 3, // customer
        created_at: new Date(),
        updated_at: new Date()
      });
    }

    await queryInterface.bulkInsert('users', users);

    const providers = [];

    for (let i = 0; i < 20; i++) {
      providers.push({
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: password,
        role_id: 2, // provider
        created_at: new Date(),
        updated_at: new Date()
      });
    }

    await queryInterface.bulkInsert('users', providers);

    const bookings = [];

    for (let i = 0; i < 100; i++) {
      bookings.push({
        user_id: faker.number.int({ min: 1, max: 50 }),
        provider_id: faker.number.int({ min: 51, max: 70 }),
        service_id: faker.number.int({ min: 1, max: 4 }),
        booking_date: faker.date.future(),
        status: 'pending',
        created_at: new Date(),
        updated_at: new Date()
      });
    }

    await queryInterface.bulkInsert('bookings', bookings);

    const reviews = [];

    for (let i = 0; i < 100; i++) {
      reviews.push({
        booking_id: faker.number.int({ min: 1, max: 100 }),
        rating: faker.number.int({ min: 1, max: 5 }),
        comment: faker.lorem.sentence(),
        created_at: new Date(),
        updated_at: new Date()
      });
    }

    await queryInterface.bulkInsert('reviews', reviews);
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('reviews', null, {});
    await queryInterface.bulkDelete('bookings', null, {});
    await queryInterface.bulkDelete('users', null, {});
  }
};
