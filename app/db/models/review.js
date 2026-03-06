module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define(
        "Review",
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

            rating: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            comment: {
                type: DataTypes.TEXT,
            },
        },
        {
            tableName: "reviews",
            underscored: true,
            timestamps: true,
        }
    );

    return Review;
};