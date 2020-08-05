import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlightBase } from 'react-native';

// in secs
const DEFAULT_REMAINING_TIME = 5 * 60;


// ===== helper =====
const Counter = props => {
    mins = Math.floor(props.time / 60)
    seconds = (props.time % 60)
    return <Text style={styles.infoText}>{mins} : {seconds}</Text>
}

const Title = props => {
    return <Text style={styles.infoText}>{props.mode.toUpperCase()} TIME</Text>
}

export default class Timer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            work_amount: this.props.work,
            rest_amount: this.props.rest,
            current_state: "work"
        }
    }

    decTime = () => {
        if (this.state.work_amount == 0) {
            this.setState({current_state: "rest", work_amount: this.props.work})
        } 
        if (this.state.rest_amount == 0) {
            this.setState({current_state: "work", rest_amount: this.props.rest})
        } 
        if (this.state.work_amount > 0) {
            this.setState(prevState => ({work_amount: prevState.work_amount - 1}))
        }
        if (this.state.rest_amount > 0) {
            this.setState(prevState => ({rest_amount: prevState.rest_amount - 1}))
        }

    }

    get getCurrentTimer() {
        return (this.state.current_state == "work") ? this.state.work_amount : this.state.rest_amount
    }

    componentDidMount() {
        this.timer = setInterval(this.decTime, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <View>
                {/* <Text>{this.getCurrentTimer}</Text> */}
                <Title mode={this.state.current_state}/>
                <Counter time={this.getCurrentTimer}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    infoText: {
        fontSize: 48,
        alignSelf: 'center',
    }
})