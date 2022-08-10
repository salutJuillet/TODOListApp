import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TodoButton from './TodoButton'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Todo = ({todo, deleteTodo, toggleComplete, isChecked, setIsChecked}) => {

//   const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={st.todoContainer}>
        {/* <Text style={st.todoText}>react-native로 todo list 만들기</Text> */}
        <BouncyCheckbox
            size={25}
            fillColor="#cccbf9"
            unfillColor="#FFFFFF"
            text={todo.title}
            iconStyle={{ 
                borderColor: "#a2a8e1", 
                borderRadius:5, 
                marginRight:-10
            }}
            iconInnerStyle={{ borderWidth: 2 }}
            textStyle={{ color:'#333333' }}
            onPress={() => {setIsChecked(!isChecked)}}
        />
        <View style={st.buttonGroup}>
            <TodoButton name='완료'
                        completed={todo.completed}
                        onPress={()=>toggleComplete(todo.todoIndex)}
                         />
            <TodoButton name='삭제'
                        completed={todo.completed}
                        onPress={()=>deleteTodo(todo.todoIndex)} 
                         />
        </View>
    </View>
  )
}

const st = StyleSheet.create({
    todoContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#dddddd',
        borderRadius:8,
        marginBottom:10,
        paddingTop:7,
        paddingBottom:7,
        paddingLeft:5,
        paddingRight:5,
        backgroundColor:'#ffffff'
    },
    todoText:{
        fontSize:18
    },
    buttonGroup:{
        flexDirection:'row'
    }
})

export default Todo