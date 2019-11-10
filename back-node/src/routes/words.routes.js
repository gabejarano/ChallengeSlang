import {Router} from 'express';
import {createWord,getWords} from '../controllers/word.controller';

const router = Router();


// Post api/words
router.post('/words', createWord );

//Get api/words
router.get('/words', getWords);
module.exports=router;