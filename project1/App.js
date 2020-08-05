import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlightBase } from 'react-native';
import Timer from './components/Timer'
import { preventAutoHide } from 'expo/build/launch/SplashScreen';

const DEFAULT_WORK_MINS = 1;
const DEFAULT_REST_MINS = 5;

// ===== helper =====


// ===== main ======
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      work_seconds: DEFAULT_WORK_MINS * 60,
      rest_seconds: DEFAULT_REST_MINS * 60,
      clock_state: "work",
      active_state: true,
    }
  }
  

  // title that changes (clock state)
  // time that decreases (clock state)
  // button to stop and start with name change (active state)
  // Reset button (independent, but needs something extra)
  // input mins and seconds for work (independent)
  // input mins and second for break (independent)

  restartTimer() {

  }

  render() {
    return (
      <View style={styles.container}>
        
        <Timer work={this.state.work_seconds} rest={this.state.rest_seconds}/>

        <View style={styles.inputFields}>
          <Button title={(this.state.active_state) ? "PAUSE" : "WORK"}></Button>
          <Button onPress={() => this.restartTimer()} title="RESTART"></Button>
        </View>

        <View style={styles.inputFields}>
           <Text>Work minutes: </Text>
           <TextInput style={{ height: 40, width: 50, borderWidth: 1, margin: 5}}
            placeholder={this.state.work_seconds/60 + ""}
            onChangeText={(value) => {this.setState({work_seconds: value})}}
            />
        </View>

        <View style={styles.inputFields}>
           <Text>Rest minutes: </Text>
           <TextInput style={{ height: 40, width: 50, borderWidth: 1, margin: 5}}
            placeholder={this.state.rest_seconds/60 + ""}
            onChangeText={(value) => {this.setState({break_minutes: value})}}
            />
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
