import {DataTypes} from "sequelize";
import sequelize from "../db/connection.js";

const user = sequelize.define("user",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
     },
     contact:{
        type:DataTypes.BIGINT
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }   
});
sequelize.sync()
.then(()=>{
    console.log("User Created.......");
}).catch((err)=>{
    console.log(err);
});

export default user;
