import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

const category = sequelize.define('category',{
    slug:{
        type: DataTypes.STRING
    },
    name:{
        type : DataTypes.STRING,
        // primaryKey:true,
        allowNull:false
    },
    url:{
        type: DataTypes.STRING
    }
},
{
    timestamps:false
});
sequelize.sync()
.then(()=>{
    console.log("Category Table Created.......");
}).catch((err)=>{
    console.log(err);
});

export default category;