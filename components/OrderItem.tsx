import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StateLabel from './StateLabel'
import { Order } from '../app/orders'

export default function OrderItem({order}:{order:Order}) {
  return (
    <View 
    style={styles.container}
    >
        <View style={{ flex:1 }}>
            <Text style={styles.name}>{order.firstName} - {order.lastName}</Text>
            <Text style={styles.number}>{order.number}</Text>
        </View>
        <View style={{ marginRight: 8 }}>
            <Text style={styles.price}>{order.price} DH</Text>
            <Text style={styles.date}>{order.cart.length} items</Text>
        </View>
        <View style={{ alignItems:"flex-end" }}>
            <StateLabel state={order.state}/>
            <Text style={styles.date}>12/17 - 3:07</Text>
        </View>
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      flexDirection:"row",
      margin: 8,
      marginBottom: 3,
      marginTop: 2,
      padding: 10,
      borderWidth: 2, // Border width
      borderColor: '#fff', // Border color
      borderRadius: 8, // Border radius (optional)
      backgroundColor: '#fafafa', // Background color
      elevation: 1, // Android-specific elevation

    },
    name:{
        fontSize: 12,
        color: '#333',
    },
    price:{
        fontSize: 13,
        color:"#0a7"
    },
    date:{
        fontSize: 10,
        color: '#666',
        marginTop: 4
    },
    number:{
        fontSize: 12,
        color: '#666',
    },


})