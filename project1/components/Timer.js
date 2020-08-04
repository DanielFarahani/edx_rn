import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlightBase } from 'react-native';


export default class Timer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <View>
                <Text style={styles.infoText}>{this.state.title} TIMER</Text>
                <Text style={styles.infoText}> {this.state.minutes} : {this.state.seconds}</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    infoText: {
        fontSize: 48,
    }
})