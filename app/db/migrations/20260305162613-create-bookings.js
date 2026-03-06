"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("bookings", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      user_id: {
        type: Sequelize.INTEGER,
        references: { model: "users", key: "id" },
      },

      provider_id: {
        type: Sequelize.INTEGER,
        references: { model: "users", key: "id" },
      },

      service_id: {
        type: Sequelize.INTEGER,
        references: { model: "services", key: "id" },
      },

      booking_date: Sequelize.DATEONLY,

      booking_time: Sequelize.TIME,

      address: Sequelize.TEXT,

      total_amount: Sequelize.DECIMAL(10, 2),

      commission_amount: Sequelize.DECIMAL(10, 2),

      provider_amount: Sequelize.DECIMAL(10, 2),

      status: {
        type: Sequelize.ENUM(
          "PENDING",
          "ACCEPTED",
          "REJECTED",
          "COMPLETED",
          "CANCELLED"
        ),
        defaultValue: "PENDING",
      },

      payment_status: {
        type: Sequelize.ENUM("PENDING", "PAID", "FAILED"),
        defaultValue: "PENDING",
      },

      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });

    await queryInterface.addIndex("bookings", ["user_id"]);
    await queryInterface.addIndex("bookings", ["provider_id"]);
  },

  async down(queryInterface) {
    await queryInterface.dropTable("bookings");
  },
};