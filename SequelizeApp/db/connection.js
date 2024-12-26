import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
    'appsql',
    'root',
    'root',
    {
        dialect:'mysql',
        host:'localhost'
    }
);

sequelize.authenticate().then(()=>{
    console.log("Connection Successful......");
}).catch((err)=>{
    console.log(err);
});

export default sequelize;