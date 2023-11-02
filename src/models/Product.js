import { Sequelize, DataTypes } from "sequelize";
import {POSTGRES_URI} from '../config/index.js';

const sequelize = new Sequelize(POSTGRES_URI);

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true
    },
    category: DataTypes.STRING,
    price: {
        type: DataTypes.FLOAT,
        defaultValue: 0
    },
    imgURL: DataTypes.STRING
}, 
    {
        timestamps: true,
        version: false,
    }
);

export default Product;