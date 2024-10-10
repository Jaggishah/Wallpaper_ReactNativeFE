import { View, Text, StyleSheet } from 'react-native'
import Header from "../Elements/Header"
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={Styles.container}>
        <Header/>
      <Text style={{color:"white"}}>HomeScreen</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
    container:{
        backgroundColor: "#121928",
        flex:1
    }
})
export default HomeScreen