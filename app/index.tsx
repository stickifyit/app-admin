import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { h1, h3, h4 } from '../constent/style'
type Props = {}

const Index = (props: Props) => {
  return (
      <View style={{ flex: 1}}>
        <View style={{ padding: 16 }}>
            <Text style={h4}>Last week</Text>
            <Text style={h1}>0.00 Dh</Text>
            <View style={styles.container}>
              <Text style={h4}>Orders</Text>
              <Text style={h3}>5</Text>
            </View>
            <View style={styles.container}>
              <Text style={h4}>Confirmed</Text>
              <Text style={h3}>0</Text>
            </View>
            <View style={styles.container}>
              <Text style={h4}>Delivered</Text>
              <Text style={h3}>0</Text>
            </View>
        </View>
      </View>
  )
}


const styles = StyleSheet.create({
  container: {
    display:"flex",
    justifyContent:"space-between",
    flexDirection:"row",
    borderTop:"1px solid #333",
    marginTop: 16,
  } 
})


export default Index