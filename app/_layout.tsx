import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'

const _layout = () => {
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

export default _layout