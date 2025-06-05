const {Sequelize}=require('sequelize');

const sequelize= new Sequelize(
    'listatarea',
    'root',
    'admin123',{
        host:'127.0.0.1',
        port:3306,
        dialect:'mysql'
    }
);

sequelize.authenticate()
        .then(()=> console.log('conexion extablecida en la BD'))
        .catch(er => console.log('ocurrio error en la conexion a la BD' + er));

module.exports=sequelize