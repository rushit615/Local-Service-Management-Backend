"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("payments", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      booking_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "bookings",
          key: "id",
        },
      },

      transaction_id: Sequelize.STRING(255),

      payment_method: {
        type: Sequelize.ENUM("UPI", "CARD", "CASH"),
      },

      amount: Sequelize.DECIMAL(10, 2),

      status: {
        type: Sequelize.ENUM("SUCCESS", "FAILED", "REFUNDED"),
      },

      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("payments");
  },
};