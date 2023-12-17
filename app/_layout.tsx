import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Stack, Tabs } from 'expo-router'
import socket from '../lib/socket'
import { useOrders } from '../store/orders'


import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';


const Layout = () => {
  const {setUpdate} = useOrders()


  useEffect(()=>{
    const Refresh = ()=>{
      setUpdate(Math.random())
    }
    socket.on("add order",Refresh)

    return ()=>{
        socket.off("add order",Refresh)
    }
},[socket])






  return (
    // <Stack>
    //     <Stack.Screen name="index" options={{ title: 'Home' }} />
    //     <Stack.Screen name="orders/index" options={
    //         { 
    //             title: 'Orders',
    //             presentation: 'modal',
    //         }
    //         } />
    // </Stack>
    <Tabs>
        <Tabs.Screen name="index" options={
            {
                headerTitle: 'Home Page',
                tabBarLabel: 'Home',
            }
        }
        />
        <Tabs.Screen name="orders/index" options={
            {
                headerTitle: 'Orders Page',
                tabBarLabel: 'Orders',
            }
        }
        />
    </Tabs>
  )
}

export default Layout