import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as Font from "expo-font";

const Heading = () => {

  // const [isFontReady, setIsFontReady] = useState(false);

  // useEffect(async ()=>{
  //   await Font.loadAsync({
  //     "Agency FB": require('../assets/fonts/Agency-FB.ttf')
  //   });
  //   setIsFontReady(true);
  // }, []);

  return (
    <View style={st.header}>
        <Text style={st.headerText}>TODO List</Text>
    </View>
  )
}

const st = StyleSheet.create({
    header:{
        marginTop:60,
        marginBottom:50
    },
    headerText:{
        textAlign: 'center',
        fontSize: 70,
        // fontFamily: 'Agency FB',
        color: '#ffffff',
        fontWeight: '600'
    }
})

export default Heading