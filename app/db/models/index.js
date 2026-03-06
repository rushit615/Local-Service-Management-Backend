const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const config = require("../../config/config").development;

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

const db = {};

fs.readdirSync(__dirname)
    .filter((file) => file !== "index.js")
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(
            sequelize,
            Sequelize.DataTypes
        );

        db[model.name] = model;
    });

const {
    Role,
    User,
    Category,
    Service,
    ProviderService,
    Booking,
    Review,
    Payment,
} = db;

/* ROLE → USER */

Role.hasMany(User, { foreignKey: "role_id" });
User.belongsTo(Role, { foreignKey: "role_id" });

/* CATEGORY → SERVICE */

Category.hasMany(Service, { foreignKey: "category_id" });
Service.belongsTo(Category, { foreignKey: "category_id" });

/* PROVIDER ↔ SERVICES */

User.belongsToMany(Service, {
    through: ProviderService,
    foreignKey: "provider_id",
    as: "provider_services",
});

Service.belongsToMany(User, {
    through: ProviderService,
    foreignKey: "service_id",
    as: "providers",
});

/* BOOKINGS */

User.hasMany(Booking, {
    foreignKey: "user_id",
    as: "customer_bookings",
});

Booking.belongsTo(User, {
    foreignKey: "user_id",
    as: "customer",
});

User.hasMany(Booking, {
    foreignKey: "provider_id",
    as: "provider_bookings",
});

Booking.belongsTo(User, {
    foreignKey: "provider_id",
    as: "provider",
});

Service.hasMany(Booking, { foreignKey: "service_id" });
Booking.belongsTo(Service, { foreignKey: "service_id" });

/* REVIEW */

Booking.hasOne(Review, { foreignKey: "booking_id" });
Review.belongsTo(Booking, { foreignKey: "booking_id" });

/* PAYMENT */

Booking.hasOne(Payment, { foreignKey: "booking_id" });
Payment.belongsTo(Booking, { foreignKey: "booking_id" });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

