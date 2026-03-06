"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("provider_services", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      provider_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },

      service_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "services",
          key: "id",
        },
      },

      custom_price: Sequelize.DECIMAL(10, 2),

      availability_status: {
        type: Sequelize.ENUM("AVAILABLE", "UNAVAILABLE"),
        defaultValue: "AVAILABLE",
      },

      experience_years: Sequelize.INTEGER,

      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });

    await queryInterface.addIndex("provider_services", ["provider_id"]);
  },

  async down(queryInterface) {
    await queryInterface.dropTable("provider_services");
  },
};