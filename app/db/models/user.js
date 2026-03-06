module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      full_name: {
        type: DataTypes.VIRTUAL,
        get() {
          const first = getDataValue("first_name") || "";
          const last = getDataValue("last_name") || "";
          return `${first} ${last}`.trim();
        },
      },

      email: {
        type: DataTypes.STRING(150),
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING(255),
      },

      phone: {
        type: DataTypes.STRING(15),
      },

      is_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      status: {
        type: DataTypes.ENUM("ACTIVE", "BLOCKED"),
        defaultValue: "ACTIVE",
      },
    },

    {
      tableName: "users",
      underScored: true,
      timeStamps: true,
    },
  );

  return User;
};
