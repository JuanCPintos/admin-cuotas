import { useEffect, useState } from "react";
import { api, IProduct } from "../services/api";
import { ResponseProduct } from "../types/Productos";



const TablaRegistro = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [query, setQuery] = useState<string>('')


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
    // console.log(event.target.value);
  }

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // try {
    //   response:Promise<any>= await api.product.getAll
    // } catch (error) {

    // }
  }

  useEffect(() => {
    const callApi = async () => {
      try {
        const response: ResponseProduct = await api.product.getAll(query)
        if (response.status === 'success') {
          setProducts(response.payload)
        }
      } catch (error) {
        console.log(error)
      }
    }
    callApi()
  }, [query])

  return (
    <>
      {/* escabezado */}
      <div className="p-2">
        <p className="text-2xl">Productos</p>
      </div>
      {/* buscador */}
      <div className="w-full px-2 mb-2 h-[48px]">
        <form
          onSubmit={handleSearchSubmit}
          action=""
          method="get"
          className="w-full">
          <input
            type="text"
            onChange={handleSearchChange}
            placeholder="Buscar"
            className="w-full pl-4 pb-3 pt-2 text-inherit bg-slate-200 rounded-3xl focus:border-cyan-400" />
        </form>
      </div>

      {/* tabla */}
      <div className="w-full flex-1 max-h-[460px] overflow-y-auto">
        <table className="w-full">
          <thead className="sticky top-0 bg-slate-50">
            <tr>
              <th className="text-left pl-3 p-1">Producto</th>
              <th className="text-left pl-3 p-1">Marca</th>
              <th className="text-left pl-3 p-1">Rubro</th>
              <th className="text-left pl-3 p-1">Costo</th>
              <th className="text-left pl-3 p-1">Precio Final</th>
              <th className="text-left pl-3 p-1">Porcentaje</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border">
                <td className="pl-3 p-1 ">{product.name}</td>
                <td className="border-x pl-3 p-1">{product.brand}</td>
                <td className="border-x pl-3 p-1">{product.sector}</td>
                <td className="border-x pl-3 p-1">{product.cost}</td>
                <td className="border-x pl-3 p-1">{product.cost * product.percentageIncrease}</td>
                <td className="pl-3 p-1">{product.percentageIncrease}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </>
  )
};

export default TablaRegistro;