import React, { useState } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Heading from './components/Heading'
import Input from './components/Input'
import Button from './components/Button'
import TodoList from './components/TodoList'
import TabBar from './components/TabBar'


let todoIndex = 0;

const App = () => {
  
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState('');
  const [isChecked, setIsChecked] = useState(false);


  /* todo input 관리 */
  const handleInput = (text) => {
    console.log('inputValue: ' + text);
    setInputValue({text});
  }

  /* todo 등록 */
  const submitTodo = () => {
    // console.log(inputValue);
    let str = inputValue.text;
    // if(inputValue.match(/^\s*$/)){
    //   return
    // }
    const todo = {
      title: str,
      todoIndex,
      completed: isChecked
    }
    todoIndex++;
    setTodos([...todos, todo]); //todos를 가져와서 새로운 todo를 추가
    console.log(todo);
    setInputValue('');
  }

  /* todo 삭제 */
  const deleteTodo = () => {
    const newTodos = todos.filter((todo) => todo.todoIndex !== todoIndex);
    setTodos(newTodos);
  }

  const toggleComplete = (todoIndex) => {
    todos.forEach((todo)=>{
      if(todo.todoIndex == todoIndex){
        setIsChecked(!isChecked)
      }
      console.log(todo);
    });
    setTodos(todos);
  }

  return (
    <View style={st.container}>
      <Heading />
      <ScrollView style={st.content} keyboardShouldPersistTaps='always'>
        <View style={st.inputGroup}>
          <Input inputValue={inputValue}
                 handleInput={(text)=>handleInput(text)} />
          <Button submitTodo={submitTodo} />
        </View>
        <TodoList todos={todos}
                  deleteTodo={deleteTodo}
                  toggleComplete={toggleComplete}
                  isChecked={isChecked}
                  setIsChecked={setIsChecked} />
      </ScrollView>
      <TabBar type={type} setType={setType} />
    </View>
  )
}

const st = StyleSheet.create({
  container:{
    flex:1, //크기가 꽉 차도록
    backgroundColor:'#cccbf9'
  },
  content:{
    flex:1,
    paddingTop: 40,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor:'#ffffff',
    elevation:10
  },
  inputGroup:{
    flexDirection:'row'
  }
})

export default App