import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";
// const sequelize = new sequelize('sqlite::memory:');
// console.log(sequelize)

const product = sequelize.define('product',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description:{ type:DataTypes.STRING},
    category:{ type:DataTypes.STRING},
    price:{
        type:DataTypes.DECIMAL,
        allowNull:false,
    },
    discountPercentage:{ type:DataTypes.FLOAT},
    rating:{ type:DataTypes.FLOAT},
    stock:{ type:DataTypes.INTEGER},
    brand:{ type:DataTypes.STRING},
    warrantyInformation:{ type:DataTypes.STRING},
    shippingInformation:{ type:DataTypes.STRING},
    availabilityStatus:{type:DataTypes.STRING},
    thumbnail:{ type:DataTypes.STRING}
},{
    timestamps:false
}
);
sequelize.sync()
.then(()=>{
    console.log(" Product Table Created.......");
}).catch((err)=>{
    
    console.log(err);
});

// console.log(user === sequelize.models-user);
export default product;