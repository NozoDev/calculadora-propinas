import { useState } from "react"
import { MenuItem,  orderItem } from "../types"


const useOrder = () => {


    const [order, setOrder] = useState<orderItem[]>([])

    const addItem = (item : MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if(itemExist){
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity : orderItem.quantity + 1} : orderItem)
            setOrder(updatedOrder)
        } else {
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
       
    }


    const removeItem = (id: MenuItem['id']) => {
      setOrder(order.filter(item => item.id !== id))
    }

  return {
    order,
    addItem,
    removeItem
  }
}

export default useOrder
