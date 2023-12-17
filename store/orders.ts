import create from "zustand"
import { Order } from "../app/orders"



type State = {
    orders: Order[],
    setOrders: (orders: Order[]) => void,
    update : number,
    setUpdate : (update : number) => void
}



export const useOrders = create<State>((set) => ({
    orders: [],
    setOrders: (orders: Order[]) => set({ orders }),
    update:0,
    setUpdate : (update : number) => set({ update })
}))