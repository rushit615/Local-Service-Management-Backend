module.exports = (sequelize, DataTypes) => {
    const Service = sequelize.define(
        "Service",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            category_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            title: {
                type: DataTypes.STRING(150),
                allowNull: false,
            },

            description: {
                type: DataTypes.TEXT,
            },

            base_price: {
                type: DataTypes.DECIMAL(10, 2),
            },

            status: {
                type: DataTypes.ENUM("ACTIVE", "INACTIVE"),
                defaultValue: "ACTIVE",
            },
        },
        {
            tableName: "services",
            underscored: true,
            timestamps: true,
        }
    );

    return Service;
};