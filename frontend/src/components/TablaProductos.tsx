import { useEffect, useState } from "react";
import { Product } from "../types/Productos";
import { api } from "../services/api";

type State = {
  showResult: boolean,
  apiMessage: string,
  error: string
}

const InitialState: State = {
  showResult: false,
  apiMessage: '',
  error: ''
}

const TablaProduco = () => {
  const [state, setState] = useState<State>(InitialState)
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState<string>('')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setQuery(event.target.value)
    // console.log(event.target.value);
  }

  const handleSearchSubmit = (event:React.FormEvent)=>{
    event.preventDefault()
    // try {
    //   response:Promise<any>= await api.product.getAll
    // } catch (error) {
      
    // }
  }

  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await api.product.getAll(query)
        const products: Product[] = response.payload
        setProducts(products)
      } catch (error) {
        setState({
          ...state,
          showResult: true,
          apiMessage: "Error en la ob",
          error: String(error)
        })
      }
    }
    callApi()
  }, [query])

  return (
    <div className="w-full h-full flex flex-col">
      <div className="p-2">
        <p className="text-2xl">Productos</p>
      </div>
      <div className="w-full px-2 mb-2 h-[48px]">
        <form 
        action="" 
        method="get" 
        className="w-full"
        onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Buscar"
            className="w-full pl-4 pb-3 pt-2 text-inherit bg-slate-200 rounded-3xl focus:border-cyan-400"
          />
        </form>
      </div>
      <div className="w-full flex-1 overflow-y-auto">
        <div className="max-h-[460px] overflow-y-auto">
          <table className="w-full">
            <thead className="sticky top-0 bg-slate-50">
              <tr>
                <th className="text-left pl-3 p-1">Nombre</th>
                <th className="text-left pl-3 p-1">Rubro</th>
                <th className="text-left pl-3 p-1">Precio</th>
              </tr>
            </thead>
            <tbody className="">
              {
                products?.map((product) => (
                  <tr key={product._id} className="border">
                    <td className="pl-3 p-1">{product.name}</td>
                    <td className="border-x pl-3 p-1">{product?.sector}</td>
                    <td className="pl-3 p-1">{product.cost * product.percentageIncrease}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TablaProduco;