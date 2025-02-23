import React, { useState } from "react";
import { api, IProduct } from "../services/api";
import { ResponseProduct } from "../types/Productos";

const FormularioProducto = () => {

  const [formulario, setFormulario] = useState<Partial<IProduct>>({
    name: '',
    brand: '',
    sector: '',
    cost: 0,
    percentageIncrease: 0,
  })

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({
      ...formulario,
      [event.target.id]: event.target.value
    })
  }
  const handleCargarProducto = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      const response: ResponseProduct = await api.product.createProduct(formulario)
      console.log(response);

      if (response.status === 'success') {
        window.location.reload()
      }

    } catch (error) {
      console.log(error)
    }


  }

  return (
    <>
      <div className="p-2">
        <p className="text-2xl">Nuevo Producto</p>
      </div>
      <form onSubmit={handleCargarProducto}>
        <div className="mb-2 flex flex-col px-2">
          <label htmlFor="nombre" className="form-label text-lg">Nombre</label>
          <input required type="text" placeholder="Nombre del producto" onChange={handleChangeInput} className="bg-slate-100 text-inherit p-1 pb-2 px-2 rounded-xl" id="name" />
        </div>
        <div className="mb-2 flex flex-col px-2">
          <label htmlFor="marca" className="form-label text-lg">Marca</label>
          <input required type="text" placeholder="Marca del producto" onChange={handleChangeInput} className="bg-slate-100 text-inherit p-1 pb-2 px-2 rounded-xl" id="brand" />
        </div>
        <div className="mb-2 flex flex-col px-2">
          <label htmlFor="rubro" className="form-label text-lg">Rubro</label>
          <input required type="text" placeholder="Rubro relacionados" onChange={handleChangeInput} className="bg-slate-100 text-inherit p-1 pb-2 px-2 rounded-xl" id="sector" />
        </div>
        <div className="mb-2 flex flex-col px-2">
          <label htmlFor="costo" className="form-label text-lg">Costo</label>
          <input required type="number" placeholder="Costo del producto" onChange={handleChangeInput} className="bg-slate-100 text-inherit p-1 pb-2 px-2 rounded-xl" id="cost" />
        </div>
        <div className="mb-2 flex flex-col px-2">
          <label htmlFor="porcentaje" className="form-label text-lg">Porcentaje</label>
          <input required type="number" placeholder="Porcentaje de aumento" onChange={handleChangeInput} className="bg-slate-100 text-inherit p-1 pb-2 px-2 rounded-xl" id="percentageIncrease" />
        </div>
        {/* <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <textarea placeholder="Descripcion del producto..." className="form-control" id="descripcion"></textarea>
                </div> */}
        <div className="mb-2 flex flex-col px-2">
          <label htmlFor="pVenta" className="form-label text-lg">Precio de venta</label>
          <input type="text" placeholder="XX.XX" className="bg-slate-100 text-inherit p-1 pb-2 px-2 rounded-xl" id="pVenta" />
        </div>
        <div className="flex px-2">
          <button type="submit" className="p-1 px-3 border rounded-xl">Guardar</button>

        </div>
      </form>
    </>
  )
};

export default FormularioProducto;