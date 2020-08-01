import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {View, Text} from './components'

const DEFAULT_MINS = 10
const DEFAULT_SECS = 0

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
      minutes: DEFAULT_MINS,
      seconds: DEFAULT_SECS
    }
  }
  
  render() {
    return (
    <h1>WORK TIMER</h1>
    <Timer style={styles.container} time={() => this.state}></Timer>
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
