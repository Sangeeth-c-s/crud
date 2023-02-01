import React from "react";
import './label.css'

class Label extends React.Component{

    render() {
        const props = this.props;

        const style = props.isActive ?{background:'green'} : {background:'red'}
        return<span className="list-label-item" style={style}>Label kk</span>
    }
}

export default Label