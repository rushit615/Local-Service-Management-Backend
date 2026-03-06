module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define(
        "Payment",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            booking_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            transaction_id: {
                type: DataTypes.STRING(255),
            },

            payment_method: {
                type: DataTypes.ENUM("UPI", "CARD", "CASH"),
            },

            amount: {
                type: DataTypes.DECIMAL(10, 2),
            },

            status: {
                type: DataTypes.ENUM("SUCCESS", "FAILED", "REFUNDED"),
            },
        },
        {
            tableName: "payments",
            underscored: true,
            timestamps: true,
        }
    );

    return Payment;
};