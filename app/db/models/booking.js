module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define(
        "Booking",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            provider_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            service_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            booking_date: {
                type: DataTypes.DATEONLY,
            },

            booking_time: {
                type: DataTypes.TIME,
            },

            address: {
                type: DataTypes.TEXT,
            },

            total_amount: {
                type: DataTypes.DECIMAL(10, 2),
            },

            commission_amount: {
                type: DataTypes.DECIMAL(10, 2),
            },

            provider_amount: {
                type: DataTypes.DECIMAL(10, 2),
            },

            status: {
                type: DataTypes.ENUM(
                    "PENDING",
                    "ACCEPTED",
                    "REJECTED",
                    "COMPLETED",
                    "CANCELLED"
                ),
                defaultValue: "PENDING",
            },

            payment_status: {
                type: DataTypes.ENUM("PENDING", "PAID", "FAILED"),
                defaultValue: "PENDING",
            },
        },
        {
            tableName: "bookings",
            underscored: true,
            timestamps: true,
        }
    );

    return Booking;
};