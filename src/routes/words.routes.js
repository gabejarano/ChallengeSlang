import {Router} from 'express';
import {createWord,getWords, getFallas} from '../controllers/word.controller';

const router = Router();

//EndPoint para agregar nuevas palabras a la base de datos con su respectiva pronunciación
// Post api/words {word} 
router.post('/words', createWord );

//Get api/words
router.get('/words', getWords);

//Get api/words
router.get('/words/failures/:indice/:palabra', getFallas);


module.exports=router;

