import 'babel-polyfill';
import app from './app';



async function main() {

    //--------------------------------------------Settings----------------------------------------------
    app.set('port', process.env.PORT || 8000);
    
    //Run server express.
    await app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`);
    })
};

main();