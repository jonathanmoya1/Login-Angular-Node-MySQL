import { Sequelize } from "sequelize";


const sequelize = new Sequelize('rrhh', 'root', 'Estegrande22!', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;