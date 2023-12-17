import { View, Text, FlatList, FlatListComponent, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, Stack, useLocalSearchParams } from 'expo-router'
import { useOrders } from '../../../store/orders';
import { Order } from '..';
import StateLabel from '../../../components/StateLabel';
import { h1 } from '../../../constent/style';
import { Ionicons } from '@expo/vector-icons';

const Index = () => {
  const {id} = useLocalSearchParams();
  const {orders} = useOrders();
  const [order,setOrder] = useState<Order|null>(null)
  useEffect(()=>{
    setOrder(orders.find((order)=>order._id===id) || null)
  },[])
  return (
    order &&
    <View style={{flex:1}}>
      <Stack.Screen options={{
        presentation:"modal",
        headerTitle:order.state,
        headerRight:()=>{
          return <Link href={`https://wa.me/${order.number}`}><Ionicons name="logo-whatsapp" size={24} color="black" /></Link>
        },

      }} 
      
      />
      <View style={{padding:16,margin:8,backgroundColor:"white", borderRadius:8}}>
          <Row name='State' value={order.state}></Row>
          <Row name='Name' value={`${order.firstName} ${order.lastName}`}></Row>
          <Row name='Number' value={order.number}></Row>
          <Row name='Price' value={`${order.price} DH`}></Row>
          <Row name='Address' value={order.address}></Row>
          {/* <Row name='Quantity' value={`${order.cart.length} items`}></Row> */}
          <Row name='Time' value={
            new Intl.DateTimeFormat('en-US', {
              year: '2-digit',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
            }).format(new Date(order?.createdAt))
          } />
      </View>
      <View style={{padding:0,marginHorizontal:8,flex:1, borderRadius:8}}>
        {/* <Text style={h1}>Items</Text> */}
        <FlatList numColumns={3} data={order.cart} keyExtractor={(item)=>item._id} renderItem={({item})=>( <View style={{ flex:1,margin:2, aspectRatio:0.66666}}>
            <Image source={{uri:item.image}} style={{width:"100%",height:"100%"}}></Image>
          </View>
        )} />
      </View>
    </View>
  )
}



const Row = ({name,value}:{name:string,value:string}) => {
  return(
    <View style={{flexDirection:"row",justifyContent:"space-between",margin:2}}>
          <Text style={{fontSize:15}}>{name}</Text>
          {
            name === 'State' ?
            <StateLabel state={value}/>:
            <Text style={{fontSize:12}}>{value}</Text>
          }
    </View>
  )
}

export default Index