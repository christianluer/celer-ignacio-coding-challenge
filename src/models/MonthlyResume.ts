import { DataTypes } from "sequelize";
import sequelize from "../database/connection";
import dotenv from 'dotenv';
import { User } from "./User";
dotenv.config();

export const MonthlyResume = sequelize.define('monthly_resumes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ptributario: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    timestamps: false
});


// now foreign key to user
MonthlyResume.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'id',
    as: 'userDetails'
});

User.hasMany(MonthlyResume, {
    foreignKey: 'user_id',
    sourceKey: 'id',
    as: 'monthlyResumes'
});

export const createRandomMonthlyResume = async (ptributario: string, user_id: number): Promise<void> => {
    const randomStatus = Math.random() > 0.5 ? 'failed' : 'invalid';
    await MonthlyResume.create({ ptributario, user_id, status: randomStatus });
};