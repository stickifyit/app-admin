import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import OrderItem from '../../components/OrderItem'
import axios from 'axios'
import { BackendHost } from '../../constent/backend'
import { useOrders } from '../../store/orders'

type Props = {}

type CustomSheetItem = {
  x: number;
  y: number;
  width: string;
  height: string;
  image: string;
  _id: string;
};

type CustomSheetSchema = {
  data: {
    items: CustomSheetItem[];
  };
  _id: string;
};

type CartItem = {
  _id: string;
  state: string;
  orderId: string;
  image: string;
  type: string;
  customSheetSchema?: CustomSheetSchema;
  cupSchema?: {
    data: {
      image: string;
      type: string;
    };
    quantity: number;
    _id: string;
  };
  tShirtSchema?: {
    data: {
      image: string;
      type: string;
    };
    quantity: number;
    _id: string;
  };
  stickerSheetSchema?: {
    data: {
      sheetId: string;
    };
    _id: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Order = {
  _id: string;
  customerId: string;
  closed: boolean;
  number: string;
  firstName: string;
  lastName: string;
  price: number;
  address: string;
  state: string;
  cart: CartItem[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const Index = (props: Props) => {
  const {orders, setOrders,update} = useOrders()
  useEffect(() => {
    axios.get<Order[]>(BackendHost+"/orders/all").then((res) => {
        setOrders(res.data)
    })
  },[update])
  return (
    <ScrollView style={{ flex: 1 , gap: 6 , paddingTop: 6 }}>
      {
        orders.map((_, index) => {
          return (
            <OrderItem order={_} key={index}/>
          )
        })
      }
    </ScrollView>
  )
}

export default Index