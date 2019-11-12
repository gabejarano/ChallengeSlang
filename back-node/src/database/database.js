import Sequalize from 'sequelize';

//conecction of database using sequelize
export const sequelize = new Sequalize (
    'postgres' || process.env.USERDB,
    'postgres'|| process.env.USERDB,
    'Gustavo2018'|| process.env.PASSWORDDB,
    {
        host:'localhost',
        dialect:'postgres',
        pool:{
            max:5,
            min:0,
            require:30000,
            idle:10000

        },
        loggin:false
    }
)

