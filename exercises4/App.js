import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SectionList, FlatList} from 'react';
import Row from './row';
import {contacts} from './contacts';


export default class App extends React.Component {
  state = {
    contactList: contacts
  }


  itemrender = props => {
    return <Row {...props}/>
  }

  render() {
    return (
      <SectionList
        data={this.state.contactList}
        renderItem={this.itemrender}></SectionList>
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
