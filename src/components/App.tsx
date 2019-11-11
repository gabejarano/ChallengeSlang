import * as React from 'react';
var Image = require('../assets/images/slang2.svg');
var correcto = require('../assets/images/correcto.svg');
var incorrecto = require('../assets/images/Incorrecto.svg');



import { FormWord } from './FormWord';


export class App extends React.Component<IProps, Istate>{

    constructor(props: IProps) {
        super(props);
        this.state = {
            words: []
        }
    }

    async componentDidMount() {
        const response = await fetch('https://challengeslang.herokuapp.com/api/words');
        const responseJson = await response.json();
        this.setState({ words: responseJson.data });
    }


    render() {

        const { words } = this.state;
        return (

            <div>
                <div className="container">
                    <div className="col s6 m6 ">
                        <div id="card" className="card">
                            <span className="card-title "><h5 className="center" >{this.props.title}</h5></span>
                            <div className="card-image ">
                                <img src={Image} height='300px' width='0px' />
                            </div>
                            <div className="card-content ">
                                <FormWord words={words} />
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
    words: Array<any>

}
