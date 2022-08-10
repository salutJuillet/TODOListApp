import React from 'react'
import { View, StyleSheet } from 'react-native'
import Todo from './Todo'

const TodoList = ({todos, deleteTodo, toggleComplete, isChecked, setIsChecked}) => {
  return (
    <View style={st.todoListContainer}>
        {
            todos.map((todo, i) => (
                <Todo todo={todo} 
                      key={i}
                      deleteTodo={deleteTodo}
                      toggleComplete={toggleComplete}
                      isChecked={isChecked}
                      setIsChecked={setIsChecked}
                />
            ))
        }
    </View>
  )
}

const st = StyleSheet.create({
    todoListContainer:{
        margin:20,
        justifyContent:'space-around',
        shadowOpacity:0.3,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: {width: 4, height: 4},
        paddingBottom:50
    }
})

export default TodoList