import React, {useState} from 'react'
import {View, Text, TouchableHighlight, StyleSheet } from 'react-native'

const Button = ({submitTodo}) => {
  return (
    <View style={st.buttonContainer}>
        <TouchableHighlight style={st.button} 
                            activeOpacity={0.6}
                            underlayColor='#fbe5b3'
                            onPress={submitTodo}
                            >
            <Text style={st.submit}>등록</Text>
        </TouchableHighlight>
    </View>
  )
}


const st = StyleSheet.create({
    buttonContainer:{
        alignItems:'flex-end'
    },
    button:{
        width:60,
        height:50,
        backgroundColor:'#f7f5ca',
        width:60,
        paddingTop:8,
        paddingBottom:8,
        marginRight:20,
        marginTop:9,
        borderWidth:1,
        borderColor:'#fbe5b3',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15
    },
    submit:{
        color:'#333333',
        fontWeight:'500'
    }
})
export default Button