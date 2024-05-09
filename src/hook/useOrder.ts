import { useState } from "react"
import { MenuItem, OrdeItem } from "../types"

const useOrder = () => {


    const [order, setOrder] = useState<OrdeItem[]>([])

    const addItem = (item : MenuItem) => {
        console.log(item)
    }

  return {
    addItem
  }
}

export default useOrder
