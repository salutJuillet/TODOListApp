import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useFonts } from "expo-font";

const Heading = () => {

  const [fontsLoaded] = useFonts({
    '116angmuburi': require('../assets/fonts/116angmuburi.ttf')
  })

  if(!fontsLoaded){
    return null;
  }

  return (
    <View style={st.header}>
      {
        fontsLoaded && (
          <Text style={st.headerText}>TODO List</Text>
        )
      }
    </View>
  )
}

const st = StyleSheet.create({
    header:{
        marginTop:80,
        marginBottom:50,
        // textShadowColor: '#ffffff',
        // textShadowOffset: {width: 1, height: 1},
        // textShadowRadius: 1
    },
    headerText:{
        textAlign: 'center',
        fontSize: 70,
        fontFamily: '116angmuburi',
        color: '#ffffff',
        
    }
})

export default Heading