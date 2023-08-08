import { sequelize } from '../database/database.js';
import { DataTypes } from 'sequelize'
import { Task } from './Task.js';

//Generar scheme
export const Project = sequelize.define('projects',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
        
    },
    priority:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

Project.hasMany(Task,{
    foreignKey: 'projectId',
    sourceKey:'id'

})

Task.belongsTo(Project,{
    foreignKey:'projectId',
    targetId:'id',
})

