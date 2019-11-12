import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

//model of the table words
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