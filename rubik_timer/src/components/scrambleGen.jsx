import React, {Component} from "react";
import Scrambo from "scrambo";

var threebythree = new Scrambo();
export default class ScrambleGen extends Component {

    componentDidMount(){
        let scramble = document.querySelector('#Scramble').firstChild.nodeValue;
        this.props.addScramble(scramble);
    }

    //update only when the timer stops running after a solve
    shouldComponentUpdate(nextProps){
        // eslint-disable-next-line
        return nextProps.update == false && this.props.update == true;
    }

    componentDidUpdate(){
        let scramble = document.querySelector('#Scramble').firstChild.nodeValue;
        this.props.addScramble(scramble);
    }

    render(){
        let scramble = threebythree.get(1);

        return (
            <h2 id="Scramble" className="scramble">{scramble}</h2>
        );
    }
}