import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlightBase } from 'react-native';

const WORK_DEFAULT_MINS = 10
const WORK_DEFAULT_SECS = 0
const BREAK_DEFAULT_SECS = 5
const BREKA_DEFAULT_SECS = 0


const Timer = props => (
  <View>
    <Text>{props.time.minutes}</Text>
    <Text> : </Text>
    <Text>{props.time.seconds}</Text>
  </View>
)

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      work_minutes: WORK_DEFAULT_MINS,
      work_seconds: WORK_DEFAULT_SECS,
      break_minutes: BREAK_DEFAULT_SECS,
      break_seconds: BREKA_DEFAULT_SECS,
      timer_state: "START" // work or break
    }
  }
  
  toggleTimer() {
    this.setState({
      timer_state: "STOP"
    })
  }

  restartTimer() {
    console.log("test")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.infoText}>{this.state.timer_state} TIMER</Text>
        <View style={styles.inputFields}>
          <Button onPress={() => this.toggleTimer()} title={this.state.timer_state}></Button>
          <Button onPress={() => this.restartTimer()} title="RESTART"></Button>
        </View>
        <View style={styles.inputFields}>
           <Text>Work Time -- </Text>
           <Text>Mins: </Text>
           <TextInput style={{ height: 40, width: 50, borderWidth: 1, margin: 10}}/>
           <Text>Secs: </Text>
           <TextInput style={{ height: 40, width: 50, borderWidth: 1, margin: 10}}/>
         </View>
        <View style={styles.inputFields}>
           <Text>Rest Time -- </Text>
           <Text>Mins: </Text>
           <TextInput style={{ height: 40, width: 50, borderWidth: 1, margin: 10}}/>
           <Text>Secs: </Text>
           <TextInput style={{ height: 40, width: 50, borderWidth: 1, margin: 10}}/>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputFields: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 48,
  }
});
