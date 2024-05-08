import type {MenuItem} from '../types'

type MenuItemProps = {
    item: MenuItem
}

const MenuItem = ({item} : MenuItemProps) => {
  return (
    <div>
      <h1>{item.name}</h1>
      <p className='font-black'> {item.price}</p>
    </div>
  )
}

export default MenuItem
