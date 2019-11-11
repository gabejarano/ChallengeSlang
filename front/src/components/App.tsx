import * as React from 'react';
var Image = require('../assets/images/slang2.svg');
var correcto = require('../assets/images/correcto.svg');
var incorrecto = require('../assets/images/Incorrecto.svg');
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export class App extends React.Component<IProps, Istate>{

    constructor(props: IProps) {
        super(props);
        this.state = {
            words: [],
            indice:1,
            word:'',
            correcto:false,
            jugando:false,
            wordmala:[]
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8000/api/words');
        const responseJson = await response.json();
        this.setState({ words: responseJson.data});
    }

    async handleConsulta(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.setState({jugando:true});
        const {words,indice,word, wordmala} = this.state;
        let palabra =words[indice].word;
        
        if(palabra == word){
            this.setState({indice:indice+1,correcto:true})
        }else{
            const response = await fetch('http://localhost:8000/api/words/failures/'+indice+'/'+word)
            const responseJson = await response.json();
            let i=0;
            while(i<responseJson.data.length){
                if(responseJson.data[i]==1){
                    
                    wordmala[i]= palabra[i]
                }else{
                
                    wordmala[i]= 'wrong';
                }
                i+=1;
            }
            this.setState({correcto:false})
        }
        
    }
    handleInputChange(e:React.ChangeEvent<HTMLInputElement>){
        const {value}=e.target;
        this.setState({word:value});
    }


    render() {

        console.log(this.state.words)
        const {words,indice, correcto, jugando,wordmala} = this.state;
        return (

            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="container">
                    <div className="col s6 m6 ">
                        <div id="card" className="card">
                            <span className="card-title">Spelling Excersice</span>
                            <div className="card-image ">

                                <img src={Image} height='300px' width='0px' />

                            </div>
                            <div className="card-content ">
                                <form onSubmit={e => this.handleConsulta(e)}>
                                    <p> {(words.length>0)?words[indice].pronunciation:"No hay mas palabas"} </p>
                                    <button className="btn waves-effect waves-light"> <FontAwesomeIcon icon={faVolumeUp} /> </button>
                                    <input placeholder="Your Answer" id="first_name" type="text" className="validate"
                                    onChange={e=>this.handleInputChange(e)} />

                                    {jugando?<p>{correcto?"Muy Bien":"Try again! "+ wordmala}</p>:<p></p>}
                                   
                                    <div className="container ">
                                        <button data-target="idModal" className="btn waves-effect waves-light btn modal-trigger" type="submit" name="action" >Submit </button>
                                    </div>
                                </form>

                            </div> 
                        </div>
                       
                    </div>
                </div>
            </div>
        )
        

    }
}

interface IProps {
    title: string
}
interface Istate {
    words: Array<any>;
    indice:number,
    word:string,
    correcto:boolean,
    jugando:boolean,
    wordmala:Array<any>
}
