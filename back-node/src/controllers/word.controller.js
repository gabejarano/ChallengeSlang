import Word from '../models/words';
import unirest from 'unirest';


export async function createWord(req, res) {
    const { word } = req.body
    //Consulta en la Api la pronunciacion de la palabra y la guarda en la base de datos
    await unirest.get("https://wordsapiv1.p.mashape.com/words/"+word)
        .header("X-Mashape-Key", "45ed4fb452msh00100a67afbd6dcp1ea6afjsn61004ace6df5")
        .header("Accept", "application/json")
        .end(function (result) {
            
            let pronunciation = result.body.pronunciation.all;
            try {
                let newWord =  Word.create({
                    word,
                    pronunciation
                }, {

                    fields: ['word', 'pronunciation']
                });
                if (newWord) {
                    return res.json({
                        message: 'Project created succesfully',
                        data: newWord
                    })
                }
            } catch (e) {
                console.log(e);
                res.status(500).json({
                    message: 'Something goes wrong',
                    data: {}
                })
            }
    });
       
}

export async function getWords(req, res) {

    
    
    const words = await Word.findAll();
    res.json({
        data: words
    })
}