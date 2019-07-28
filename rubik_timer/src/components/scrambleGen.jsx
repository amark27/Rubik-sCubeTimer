import React, {Component} from "react";
import Scrambo from "scrambo";

var threebythree = new Scrambo();
export default class ScrambleGen extends Component {

    //update only when the timer stops running after a solve
    shouldComponentUpdate(nextProps){
        return nextProps.update == false && this.props.update == true;
    }

    render(){
        let scramble = threebythree.get(1);

        return (
            <h2 className="scramble">{scramble}</h2>
        );
    }
}