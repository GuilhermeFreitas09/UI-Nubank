import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, Text } from 'react-native';
import Constants from 'expo-constants';
import Barras from './components/tabs';
import Meio from './components/meio';
import { AntDesign, Ionicons } from '@expo/vector-icons'


export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <StatusBar translucent barStyle="light-content" backgroundColor="#66048D"/>
        </View>
        <View style = {styles.viewSaudacao}>
          <Text style = {styles.saudacao}>Olá, Guilherme</Text>
          <View style={{marginTop:-4, marginLeft: 85, backgroundColor: "#9824C7", height: 50, borderRadius:100, width:50, alignItems:'center', justifyContent: 'center' }}>
            <AntDesign name="eyeo" size={24} color="#FFF"/>
          </View>
          <View style={{ marginTop:-4, marginLeft: 9, backgroundColor: "#9824C7", height: 50, borderRadius:100, width:50, alignItems:'center', justifyContent: 'center' }}>
            <Ionicons name="ios-settings-outline" size={24} color="#FFF" />
          </View>
        </View>
        <View style={styles.meio}>
          <Meio/>
        </View>
        <Barras/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#8806BF',
  },
  saudacao: {
    fontSize: 25,
    color: "#FFF",
    fontWeight: "bold",
  },
  viewSaudacao: {
    flex:1,
    marginTop: 37,
    marginLeft: 15, 
    flexDirection: 'row',  
  },
  meio: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 550,
    marginBottom: 133,
    backgroundColor: "#8806BF"
  },
  iconeSaudacao:{
    position:'absolute',
    justifyContent: 'space-between'
  }

});
