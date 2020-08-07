import React, { Component, useCallback } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlightBase } from 'react-native';
import Timer from './components/Timer'
import { preventAutoHide } from 'expo/build/launch/SplashScreen';

const DEFAULT_WORK_MINS = 1;
const DEFAULT_REST_MINS = 1;

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
      running: false
    }
  }

  // button to stop and start with name change (active state)
  // Reset button (independent, but needs something extra)
  // input mins and seconds for work (independent)
  // input mins and second for break (independent)

  restartTimer = () => {
    this.setState({active_state: !this.state.active_state})
  }

  pause = () => {
    this.setState({running: !this.state.running})
    
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Text>{this.state.work_seconds}</Text>
        {this.state.active_state && <Timer work={this.state.work_seconds} rest={this.state.rest_seconds}/>}
        {!this.state.active_state && <Timer work={this.state.work_seconds} rest={this.state.rest_seconds}/>}

        <View style={styles.inputFields}>
          <Button onPress={this.pause} title={(this.state.running) ? "PAUSE" : "START"}></Button>
          <Button onPress={() => this.restartTimer()} title="RESTART"></Button>
        </View>

       <View style={styles.inputFields}>
           <Text>Work minutes: </Text>
           <TextInput style={{ height: 40, width: 50, borderWidth: 1, margin: 5}}
            placeholder={this.state.work_seconds/60 + ""}
            onChangeText={(value) => {this.setState({work_seconds: value*60})}}
            />
        </View>

        <View style={styles.inputFields}>
           <Text>Rest minutes: </Text>
           <TextInput style={{ height: 40, width: 50, borderWidth: 1, margin: 5}}
            placeholder={this.state.rest_seconds/60 + ""}
            onChangeText={(value) => {this.setState({break_minutes: value*60})}}
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
