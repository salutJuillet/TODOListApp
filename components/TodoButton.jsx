import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const TodoButton = ({name, onPress, completed}) => {
  return (
    <View style={st.buttons}>
        <TouchableOpacity onPress={onPress}>
            {/* <Text style={st.buttonText}>{name}</Text> */}
            <Text style={[
                st.buttonText,
                completed ? st.completed : null,
                name === '삭제' ? st.delete : null
            ]}>
                {name}
            </Text>
        </TouchableOpacity>
    </View>
  )
}

const st = StyleSheet.create({
    buttons:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        border:1,
        paddingLeft:5,
        paddingRight:5,
        paddingTop:3,
        paddingBottom:3,
        borderWidth:1,
        borderColor:'#cccccc',
        marginLeft:5,
        borderRadius:8
    },
    buttonText:{
        color:'#999999'
    },
    completed:{
        color:'green'
    },
    delete:{
        color:'red'
    }

})

export default TodoButton