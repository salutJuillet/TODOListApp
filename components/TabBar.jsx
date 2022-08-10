import React from 'react'
import {View, StyleSheet } from 'react-native'
import TabBarItem from './TabBarItem'

const TabBar = ({type, setType}) => {
  return (
    <View style={st.container}>
        <TabBarItem title='All' type={type} setType={()=>setType('All')} />
        <TabBarItem title='Active' type={type} setType={()=>setType('Active')} />
        <TabBarItem title='Done' type={type} setType={()=>setType('Done')} />
    </View>
  )
}

const st = StyleSheet.create({
    container:{
        height:70,
        flexDirection:'row',
        backgroundColor:'#ffffff'
    }
})

export default TabBar