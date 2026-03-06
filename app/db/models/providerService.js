module.exports = (sequelize, DataTypes) => {
    const ProviderService = sequelize.define(
        "ProviderService",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            provider_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            service_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            custom_price: {
                type: DataTypes.DECIMAL(10, 2),
            },

            availability_status: {
                type: DataTypes.ENUM("AVAILABLE", "UNAVAILABLE"),
                defaultValue: "AVAILABLE",
            },

            experience_years: {
                type: DataTypes.INTEGER,
            },
        },
        {
            tableName: "provider_services",
            underscored: true,
            timestamps: true,
        }
    );

    return ProviderService;
};