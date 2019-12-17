import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'

/**
 * styles components described below
 */

const styles = StyleSheet.create({
  powderblue :{
    width: 50,
    height: 50, 
    backgroundColor: 'powderblue'
  },
  skyblue :{
    width: 50,
    height: 50, 
    backgroundColor: 'skyblue'
  },
  steelblue :{
    width: 50,
    height: 50, 
    backgroundColor: 'steelblue'
  }
})



export default class App extends Component {
  render(){
    return(
      <View style={{ flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 2, backgroundColor: 'blue'}}>
          <View style={{flex: 4, backgroundColor: 'grey'}}/>          
          <View style={{flex: 2, backgroundColor: 'black'}}/>
          <View style={{flex: 2, backgroundColor: 'white'}}/>
        </View>
        <View style={{flex: 1, backgroundColor:'yellow', justifyContent:'space-around', alignItems:'center'}}>
          <View style={styles.powderblue} />
          <View style={styles.skyblue} />
          <View style={styles.steelblue} />
          <View style={styles.powderblue} />
          <View style={styles.skyblue} />
          <View style={styles.steelblue} />
        </View>
      </View>
    )
  }
}