const TablaProveedores = () => {

  return(
    <div className="w-full h-full flex flex-col">
      <div className="p-2">
        <p className="text-2xl">Pagos a Proveedores</p>
      </div>
      {/* <div className="w-full px-2 mb-2 h-[48px]">
        <form action="" method="get" className="w-full">
          <input type="text" placeholder="Buscar" className="w-full pl-4 pb-3 pt-2 text-inherit bg-slate-200 rounded-3xl focus:border-cyan-400"/>
        </form>
      </div> */}
      <div className="w-full flex-1 overflow-y-auto">
        <div className="max-h-[460px] overflow-y-auto">
          <table className="w-full">
            <thead className="sticky top-0 bg-slate-50">
              <tr>
                <th className="text-left pl-3 p-1">Fecha</th>
                <th className="text-left pl-3 p-1">Monto</th>
                <th className="text-left pl-3 p-1">Proveedor</th>
                <th className="text-left pl-3 p-1">Descripción</th>
              </tr>
            </thead>
              <tbody className="">
                  {/* {
                    productos.map((producto) => (
                      <tr key={producto.id} className="border">
                        <td className="pl-3 p-1">{producto.nombre}</td>
                        <td className="border-x pl-3 p-1">{producto.rubro}</td>
                        <td className="pl-3 p-1">{producto.precio}</td>
                      </tr>
                    ))
                  } */}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};

export default TablaProveedores;