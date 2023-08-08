import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Project } from "./Project.js";

export const User = sequelize.define('user',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    username: {
        type:DataTypes.STRING,
        allowNull:false
    },
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})


/*User.hasMany(Project,{
    foreignKey: 'projectManager',
    sourceKey:'id'

})

Project.belongsTo(User,{
    foreignKey:'projectManager',
    targetId:'id',
})
*/