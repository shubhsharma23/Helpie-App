import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Home from './src/Screens/Home';
import Book from './src/Screens/Book';
import AppNavigator from './src/Routing/Navigation'
import ServiceList from './src/Screens/Lists'
import Practice from './src/Components/practice'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.struct}>
          <AppNavigator />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  struct:{
    flex:1,
  }
});
