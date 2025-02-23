const FormularioComponentes = () =>{
    return (
      <>
      <div className="p-2">
          <p className="text-2xl">Nuevo Pago</p>
      </div>
      <form>
          <div className="mb-2 flex flex-col px-2">
              <label htmlFor="fecha" className="form-label text-lg">Fecha</label>
              <input type="date" placeholder="dia/mes/año" className="bg-slate-100 text-inherit p-1 pb-2 px-2 rounded-xl" id="fecha" />
          </div>
          <div className="mb-2 flex flex-col px-2">
              <label htmlFor="monto" className="form-label text-lg">Monto</label>
              <input type="number" placeholder="Monto pagado" className="bg-slate-100 text-inherit p-1 pb-2 px-2 rounded-xl" id="monto" />
          </div>
          <div className="mb-2 flex flex-col px-2">
              <label htmlFor="proveedor" className="form-label text-lg">Proveedor</label>
              <input type="text" placeholder="Nombre del proveedor" className="bg-slate-100 text-inherit p-1 pb-2 px-2 rounded-xl" id="proveedor" />
          </div>
          <div className="mb-2 flex flex-col px-2">
              <label htmlFor="descripcion" className="form-label text-lg">Descripción</label>
              <textarea placeholder="Descripcion del pago..." className="bg-slate-100 text-inherit p-1 pb-2 px-2 rounded-xl" id="descripcion"></textarea>
          </div>
          {/* <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">Descripción</label>
              <textarea placeholder="Descripcion del producto..." className="form-control" id="descripcion"></textarea>
          </div> */}
          <div className="flex px-2">
              <button type="submit" className="p-1 px-3 border rounded-xl">Guardar</button>
          </div>
      </form>
  </>
    )
};

export default FormularioComponentes;
