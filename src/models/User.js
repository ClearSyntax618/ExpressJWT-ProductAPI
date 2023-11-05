import bcrypt from 'bcryptjs'
import { Sequelize, DataTypes } from "sequelize";
import {POSTGRES_URI} from '../config/index.js';

const sequelize = new Sequelize(POSTGRES_URI);

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
},
    {
        timestamps: true,
        version: false,
    }
)

User.beforeCreate(async (user) => {
    const saltRound = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, saltRound);
    return hashedPassword;
});

export default User;