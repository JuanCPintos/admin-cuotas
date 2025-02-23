const Nav = () => {
  return(
    <header className='w-full h-[75px]'>
      <div className='h-full flex justify-between px-5'>
        <div className="content-center">
          <p>Don Luis</p>
        </div>
        <nav className='w-1/2 h-full'>
          <ul className='flex justify-between content-center h-full align-middle'>
            <li className='border-b h-[75px] border-b-red-800 content-center'><a href="/productos">Productos</a></li>
            <li className="content-center"><a href="/libretas">Libretas</a></li>
            <li className="content-center"><a href="/cargar">Cargar</a></li>
            <li className="content-center"><a href="/proveedores">Proveedores</a></li>
            <li className="content-center"><a href="/librodiario">Libro Diario</a></li>
          </ul>
        </nav>
        <div className='flex gap-3 content-center'>
          <p className="content-center">Luciana</p>
          <p className="content-center">Icono</p>
        </div>
      </div>
    </header>
  ) 
};

export default Nav;