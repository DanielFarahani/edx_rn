import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlightBase } from 'react-native';
import Timer from './components/Timer'
import { preventAutoHide } from 'expo/build/launch/SplashScreen';

const DEFAULT_WORK_MINS = 25;
const DEFAULT_REST_MINS = 5;

// ===== helper =====



// ===== main ======
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      work_seconds: DEFAULT_REST_MINS * 60,
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


  render() {
    return (
      <View style={styles.container}>
        
        {this.state.work_state && <Timer time={this.state}/>}

        <View style={styles.inputFields}>
          <Button onPress={() => (this.state.active_state) ? title="pause" : title="start"}></Button>
          <Button onPress={() => this.restartTimer()} title="RESTART"></Button>
        </View>

        <View style={styles.inputFields}>
           <Text>Work Times: </Text>
           <TextInput style={{ height: 40, width: 50, borderWidth: 1, margin: 5}}
            placeholder={this.state.work_minutes + ""}
            onChange={() => {this.setState(work_seconds)}}
            />
           {/* <Text>  Secs:</Text>
           <TextInput style={{ height: 40, width: 50, borderWidth: 1, margin: 5}}
            placeholder={this.state.work_seconds + ""}
            onChange={() => {this.setState(work_seconds)}}
            /> */}
        </View>

        <View style={styles.inputFields}>
           <Text>Rest Times: </Text>
           <TextInput style={{ height: 40, width: 50, borderWidth: 1, margin: 5}}
            placeholder={this.state.break_minutes + ""}
            onChange={() => {this.setState(break_minutes)}}
            />
           {/* <Text>  Secs:</Text>
           <TextInput style={{ height: 40, width: 50, borderWidth: 1, margin: 5}}
            placeholder={this.state.break_seconds + ""}
            onChange={() => {this.setState(break_seconds)}}
            /> */}
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
