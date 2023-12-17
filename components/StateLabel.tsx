import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const StateLabel = ({state}:{state:string}) => {
  return (
    <View>
      <Text style={
        state==="pending"?
        styles.pending
        :
        styles.confirmed
        }>{state}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    pending :{
        backgroundColor: '#08c',
        borderRadius: 4,
        fontSize: 10,
        color: '#fff',
        width: "auto",
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    confirmed:{
        backgroundColor: '#0a7',
        borderRadius: 4,
        fontSize: 10,
        color: '#fff',
        width: "auto",
        paddingHorizontal: 6,
        paddingVertical: 2,
    }
})

export default StateLabel
