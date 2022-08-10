import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const Input = ({inputValue, handleInput}) => {
  return (
    <View style={st.inputContainer}>
        <TextInput style={st.input}
                   placeholder='할 일을 작성해보아요.'
                   selectionColor='#b5d5b3'
                   value={inputValue}
                   onChangeText={handleInput} />
    </View>
  )
}

const st = StyleSheet.create({
    inputContainer:{
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity:0.3,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: {width: 2, height: 2},
        width:290
    },
    input: {
        height:60,
        backgroundColor:'#ffffff',
        paddingLeft:10,
        paddingRight:16,
        borderBottomWidth:1,
        borderColor:'#707070',
        borderRadius:10,
        fontSize:16
    }
})

export default Input