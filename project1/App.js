import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const WORK_DEFAULT_MINS = 10
const WORK_DEFAULT_SECS = 0
const BREAK_DEFAULT_SECS = 5
const BREKA_DEFAULT_SECS = 0


const Timer = props => (
  <div>
    <span>{props.time.minutes}</span>
    <span> : </span>
    <span>{props.time.seconds}</span>
  </div>
)

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      work_minutes: WORK_DEFAULT_MINS,
      work_seconds: WORK_DEFAULT_SECS,
      break_minutes: BREAK_DEFAULT_SECS,
      break_seconds: BREKA_DEFAULT_SECS,
      timer_state: "START" // start or stop
    }
  }
  
  toggleTimer() {
    this.timer_state = "STOP"
  }

  restartTimer() {
    console.log("test")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.timer_state} TIMER</Text>
        <Button onPress={() => this.toggleTimer()} title={this.state.timer_state}></Button>
        <Button onPress={() => this.restartTimer()} title="RESTART"></Button>
        <View>
           <Text>Work Time: </Text>
           <Text>Mins: </Text>
           <TextInput id="work_mins"></TextInput>
           <Text>Secs: </Text>
           <TextInput id="work_secs"></TextInput>
         </View>
        <View>
           <Text>Rest Time: </Text>
           <Text>Mins: </Text>
           <TextInput id="rest_mins"></TextInput>
           <Text>Secs: </Text>
           <TextInput id="rest_secs"></TextInput>
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
});
