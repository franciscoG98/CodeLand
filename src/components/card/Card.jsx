import './cardStyles.scss'

// eslint-disable-next-line react/prop-types
const Card = ({ nombre, descripcion, foto, horario, capacidad }) => {
  return (
    <div className='card'>
        <h2 className='card_title'>{nombre}</h2>
        <img className='card_img' src={foto} alt={nombre} />
        <p>{descripcion}</p>
        <span>Horario: {horario}</span>
        <br />
        <span>Capacidad: {capacidad}</span>
        <br />
        <button className='card_sell_btn'>vender</button>
    </div>
  )
}

export default Card