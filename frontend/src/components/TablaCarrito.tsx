import { useState } from "react";
import { Producto } from "../types/Productos";

const TablaCarrito = () => {

  const[data] = useState<Producto[]>([{ id: 19, nombre: "Café", rubro: "Bebidas", precio: 250.00 },
    { id: 20, nombre: "Té", rubro: "Bebidas", precio: 70.00 },
    { id: 21, nombre: "Zanahoria", rubro: "Verduras", precio: 40.00 }
  ])



  return(
    <>
      {/* Header */}
      <div className="w-full p-2 flex justify-between">
        <p className="text-2xl">Carrito</p>
        <p className="content-center">Icono</p>
      </div>
      {/* Tabla */}
      <div className="w-full flex-1 max-h-[340px] overflow-y-auto">
        <table className="w-full">
          <thead className="sticky top-0 bg-slate-50">
            <tr>
              <th className="text-left pl-3 p-1">Producto</th>
              <th className="text-left pl-3 p-1">Cantidad</th>
              <th className="text-left pl-3 p-1">Precio</th>
            </tr>
          </thead>
          <tbody>
            {data.map((producto)=>(
              <tr key={producto.id} className="border">
                <td className="pl-3 p-1 ">{producto.nombre}</td>
                <td className="border-x pl-3 p-1">{producto.rubro}</td>
                <td className="pl-3 p-1">{producto.precio}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      <div className="pb-1 px-4">
        <div className="w-full flex justify-between">
          <p className="text-2xl">Total</p>
          <p className="text-3xl">$ XX.XX</p>
        </div>
      </div>

      <div className="px-3">
        <div>
          <p className="text-xl pb-2">Metodos de Pago</p>
        </div>
        <div className="pb-3 flex gap-x-3 gap-y-2 flex-wrap">
          <button className="p-1 px-3 border rounded-xl">QR</button>
          <button className="p-1 px-3 border rounded-xl">Efectivo</button>
          <button className="p-1 px-3 border rounded-xl">Transferencia</button>
          <button className="p-1 px-3 border rounded-xl">Debito</button>
          <button className="p-1 px-3 border rounded-xl">Credito</button>
          <button className="p-1 px-3 border rounded-xl">Libreta</button>
        </div>
      </div>
    </>
  )
};

export default TablaCarrito;