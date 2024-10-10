import { View, Text, StyleSheet } from 'react-native'
import Feather from "react-native-vector-icons/Feather";
import React from 'react'

const Header = () => {
  return (
    <View style={Styles.container}>
        <Feather name='menu' size={30} color={"white"}/>
        <Text style={{color:"#fff",fontSize:25}}>JS</Text>
        <Feather name='bell' size={30} color={"white"}/>
    </View>
  )
}

const Styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:20,
        borderBottomColor:"black",
        borderBottomWidth:1,
        elevation:8,
        alignItems: "center",
    }
})

export default Header