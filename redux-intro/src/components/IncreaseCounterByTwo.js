import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {increaseCounterByTwo } from '../redux/actions/counterActions';
import {connect} from "react-redux";


class IncreaseCounterByTwo extends Component {
    render() {
        return (
            <div>
                <button onClick={(e)=>this.props.dispatch(increaseCounterByTwo())}>+2</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increaseCounterByTwo,dispatch)};
}

export default connect(mapDispatchToProps)(IncreaseCounterByTwo);
