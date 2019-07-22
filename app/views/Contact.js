import React, {Component} from 'react';
import { View, TouchableOpacity, ScrollView, Text, StyleSheet, TextInput } from 'react-native';

class Contact extends Component {
 render() {
    return (
      <View style={styles.headerDiv}>
      <Text style={styles.header}>Contact</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#fff"
  },
  headerDiv:{
    backgroundColor: '#fcec01',
    height: 90
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#114260',
    marginTop: 15,
  },
})


export default Contact;