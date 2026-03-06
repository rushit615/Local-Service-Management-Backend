module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "Role",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Datatypes.ENUM("ADMIN", "USER", "PROVIDER"),
        allowNull: false,
      },
    },
    {
      tableName: "roles",
      underScored: true,
      timeStamps: true,
    },
  );

  return Role;
};
