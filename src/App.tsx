import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";
import useOrder from "./hook/useOrder";

function App() {

  const { order, addItem, removeItem } = useOrder();

  return (
    <>
      <header className="bg-teal-700 py-4">
        <h1 className="text-center font-bold text-4xl font-mono">
          Calculadora de propinas
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents order={order} removeItem={removeItem}/>
        </div>
      </main>
    </>
  );
}

export default App;
