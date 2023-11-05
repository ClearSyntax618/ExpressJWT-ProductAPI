import User from "./User.js"
import Role from "./Role.js";
import Product from "./Product.js";

User.hasOne(Role, {
    onUpdate: 'CASCADE'
});
Role.hasMany(User, {
    onUpdate: 'CASCADE'
});

Role.belongsTo(User, { foreignKey: 'userId'})
Product.belongsTo(User, { foreignKey: 'userId' });

export {User, Role, Product};