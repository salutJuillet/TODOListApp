import React, {useState} from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'

const TabBarItem = ({title, type, setType}) => {

  const [selected, setSelected] = useState('');
  const [bold, setBold] = useState('');

  return (
    <TouchableHighlight style={[st.item, st.border]}
                        onPress={setType}>
        <Text style={[
            st.itemText,
            type === title ? st.bold : null
        ]}>
            {title}
        </Text>
    </TouchableHighlight>
  )
}

const st = StyleSheet.create({
    item:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    border:{
        borderTopWidth:1,
        borderLeftWidth:1,
        borderTopColor:'#dddddd',
        borderLeftColor:'#dddddd',
        borderStyle:'dashed'
    },
    itemText:{
        color:'#999',
        fontSize:17
    },
    selected:{
        backgroundColor:'#cccbf9'
    },
    bold:{
        fontWeight:'bold'
    }
})

export default TabBarItem