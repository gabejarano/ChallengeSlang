import * as React from 'react';
import { faVolumeUp, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// @ts-ignore
import Speech from "speak-tts";
import { workerData } from 'worker_threads';

export class FormWord extends React.Component<IwordProp, IwordState>{

    constructor(props: IwordProp) {
        super(props);
        this.state = {
            correcta: false,
            jugando: false,
            wordmala: [],
            word: '',
            indice: 0,
            letra: ''
        }
    }

    //Method tha verify the word.
    //use the endpoint failures to determine the position of the letter that is wrong in the word.
    async handleConsulta(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.setState({ jugando: true });
        const { wordmala, indice, word } = this.state;
        const { words } = this.props;
        let palabra = words[indice].word;
        wordmala.splice(0, wordmala.length);
        if (palabra == word) {
            this.setState({ indice: indice + 1, correcta: true })
        } else {
            const response = await fetch('http://localhost:8000/api/words/failures/' + indice + '/' + word)
            const responseJson = await response.json();
            let i = 0;
            

            while (i < responseJson.data.length) {
                if (responseJson.data[i] == 1) {

                    wordmala[i] = palabra[i]
                } else {

                    wordmala[i] = 'wrong';
                }
                i += 1;
            }
            this.setState({ correcta: false })
        }
        this.setState({word: ''})
    }


    //method that change de input with the value of a letter 
    //value = letter
    //borrar= change the input for '' if is equal true
   async handleInputChange(value:string, borrar:boolean) {
        
    if(borrar){
        await this.setState({word: value})
    }else{
        await this.setState({ letra: value });
        await this.setState({word: this.state.word+this.state.letra})
    }
        

        
    }

    //method that allow us reproduce the sound of the word
    soundWord() {
        const speech = new Speech();
        const { indice } = this.state;
        const { words } = this.props;
        speech.setLanguage('en-US');

        // will throw an exception if not browser supported
        if (speech.hasBrowserSupport()) { // returns a boolean
            console.log("speech synthesis supported")
        }
        
        speech.speak({

            text: words[indice].word,
            queue: false, // current speech will be interrupted,
        }).then(() => {
            console.log("Success !")
        })
       
    }

    //render of the component
    render() {
        
        const { words } = this.props;
        const { jugando, correcta, wordmala, indice, word } = this.state;
        const letras=[]
        if(words.length>indice){
            for(let i=0; i<words[indice].word.length; i++){
                letras[i]= words[indice].word[i];
            }
        }
        letras.sort();
        const letters = letras.map((letra,i)=>{
            return (
                <a className="btn-floating btn-large waves-effect waves-light green " onClick={e=>this.handleInputChange(letra,false)}>{letra}</a>
            )
        })
        return (
            <div>
                <div className="row center">
                <button className="btn waves-effect waves-light" onClick={e => this.soundWord()}> <FontAwesomeIcon icon={faVolumeUp} /> </button>
                
                <button className="btn waves-effect waves-light"> <FontAwesomeIcon icon={faCheckCircle} /> {indice} </button>
                </div>
                
                <form onSubmit={e => this.handleConsulta(e)}>

                   {/*print the pronunciation of the word with index=indice*/}
                   {(words.length > indice) ? <h4 className="center" style={{color: "#154360"}}>{words[indice].pronunciation}</h4>  : "There are no more words"} 
                    
                    {/*Input of the word */}
                    <input placeholder="Your Answer"  id="first_name" type="text" className="validate"
                        contentEditable={false} value={word} />
                    <div className="center">
                    
                    {/*print the letters to complete the word */}
                    {letters}
                    
                    <a className="btn-floating btn-large waves-effect waves-light red  " onClick={e=>this.handleInputChange("",true)}>Delete</a>
                    </div>    
                    
                    {/* */}
                    {jugando ? <p>{correcta ? "Very Well!" : "Try again! " + wordmala}</p> : <p></p>}
                    <div className="center ">
                        <button data-target="idModal" className="btn waves-effect waves-light center" type="submit" name="action" >Submit </button>
                    </div>
                </form>
            </div>
        )
    }

}

/*Prop of component */
interface IwordProp {

    words: Array<any>,


}
/*State of component */
interface IwordState {
    
    correcta: boolean,
    jugando: boolean,
    wordmala: Array<any>,
    word: string,
    indice: number,
    letra: string
}
