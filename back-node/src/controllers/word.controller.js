import Word from '../models/words';
import unirest from 'unirest';


//create a word and update words table in the DB.
//Using wordapi to search the pronunciation of the word.
export async function createWord(req, res) {
    const { word } = req.body
    //Consulta en la Api la pronunciacion de la palabra y la guarda en la base de datos
    await unirest.get("https://wordsapiv1.p.mashape.com/words/"+word)
        .header("X-Mashape-Key", process.env.WORDAPI )
        .header("Accept", "application/json")
        .end(function (result) {
            
            let pronunciation = result.body.pronunciation.all;
            try {
                //create the word in the DB
                let newWord =  Word.create({
                    word,
                    pronunciation
                }, {

                    fields: ['word', 'pronunciation']
                });
                if (newWord) {
                    return res.json({
                        message: 'Word created succesfully',
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

//get all the words in the DB
export async function getWords(req, res) {
    const words = await Word.findAll();
    res.json({
        data: words
    })
}

//Method that allow us recognize the position of a filure in a word sent by an user.
export async function getFallas(req, res) {
    const words = await Word.findAll();
    const {indice,palabra} = req.params
    

    let arregloPalabra = words[indice].word
    let i =0;
    let enviar=[];
    while (i<arregloPalabra.length ){
        if( arregloPalabra[i]==palabra[i]){
            enviar[i]=1;
        }else{
            enviar[i]=0; 
        }
        i+=1;
    }
    res.json({
        data:enviar
    })
    
}

