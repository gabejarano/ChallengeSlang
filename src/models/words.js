import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

 const Word = sequelize.define('words', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    word: {
        type: Sequelize.TEXT
    },
    pronunciation : {
        type: Sequelize.TEXT
    }
}, {
    timestamps:false
})

module.exports= Word;