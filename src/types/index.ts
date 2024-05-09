
export type MenuItem = {
    id:number,
    name: string
    price: number
}


export type OrdeItem = MenuItem & {
    quantity: number
}