import Sequalize from 'sequelize';

export const sequelize = new Sequalize (
     process.env.USERDB,
     process.env.USERDB,
     process.env.PASSWORDDB,
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

