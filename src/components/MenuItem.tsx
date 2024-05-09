import type { MenuItem } from "../types";


type MenuItemProps = {
  item: MenuItem,
  addItem: (item: MenuItem) => void
};

const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <button onClick={() => addItem(item)} className="border-2 bg-indigo-400 hover:bg-teal-200 w-full p-3 flex justify-between mb-4">
      <h1>{item.name}</h1>
      <p className="font-black"> ${item.price}</p>
    </button>
  );
};

export default MenuItem;
