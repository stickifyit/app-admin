import { View, Text, ScrollView } from 'react-native'
import React from 'react'

type Props = {}

const Index = (props: Props) => {
  return (
    <ScrollView style={{ flex: 1 , gap: 6 , paddingTop: 6}}>
      {
        new Array(8).fill("").map((_, index) => {
          return (
            <View key={index} style={{ height: 100, backgroundColor: "red",marginBottom: 6}} />
          )
        })
      }
    </ScrollView>
  )
}

export default Index