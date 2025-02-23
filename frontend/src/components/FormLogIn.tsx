const FormLogIn = () => {
  const labelStyle = `text-base`
  const inputStyle = `px-2 py-1 border text-lg`

  return (
    <>
      <form action="" className="w-72 flex flex-col px-12 py-8 border rounded-lg gap-2">
        <label htmlFor="user" className={labelStyle}>Usuario</label>
        <input type="text" placeholder="usuario@gmail.com" className={inputStyle}/>
        <label htmlFor="password" className={labelStyle}>Contraseña</label>
        <input type="text" placeholder="******" className={inputStyle}/>
        <button className="w-100 py-2 rounded-lg bg-neutral-900 text-slate-50">Ingresar</button>
      </form>
    </>
  )
}

export default FormLogIn