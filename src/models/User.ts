import { DataTypes } from "sequelize";
import sequelize from "../database/connection";
import dotenv from 'dotenv';
dotenv.config();

export const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mail: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
},
{
    timestamps: false
});

export const createRandomUser = async (): Promise<void> => {
    const randomMail = process.env.EXAMPLE_MAIL;
    await User.create({ mail: randomMail });
}