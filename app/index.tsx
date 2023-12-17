import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link } from 'expo-router'
import { h1, h3, h4 } from '../constent/style'
import { BackendHost } from '../constent/backend'
import axios from 'axios'
type Props = {}

type Data = {
  orders: number
  totalPrice: number
  delivered: number
  confirmed: number
}

const Index = (props: Props) => {
  const [data,setData] = useState<Data>()
  useEffect(() => {
    axios.get<Data>(BackendHost+"/orders/dashboard").then((res) => {
      setData(res.data)
    })
  },[])
  return (
    data &&
      <View style={{ flex: 1}}>
        <View style={{ padding: 16 }}>
            <Text style={h4}>Last week</Text>
            <Text style={h1}>{
              data.totalPrice.toFixed(2)
            } Dh</Text>
            <View style={styles.container}>
              <Text style={h4}>Orders</Text>
              <Text style={h3}>{data.orders}</Text>
            </View>
            <View style={styles.container}>
              <Text style={h4}>Confirmed</Text>
              <Text style={h3}>{data.confirmed}</Text>
            </View>
            <View style={styles.container}>
              <Text style={h4}>Delivered</Text>
              <Text style={h3}>{data.delivered}</Text>
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