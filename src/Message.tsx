function Message(){
  const name = 'Marcos';
  if (name)
    return <h1>¡Hola {name}!</h1>
  return <h1>¡Hola Mundo!</h1>
}

export default Message;