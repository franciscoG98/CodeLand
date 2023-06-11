import { Link } from 'react-router-dom'
import './cardEmpleadoStyles.scss'

const cardEmpleado = ({ id, name, lastname, juego}) => {
  return (
    <div className='card'>
        <h1>{name + ' ' + lastname}</h1>
        <span>juego asignado: {juego}</span>
        <br />
        <Link to={`/empleados/${id}`}>
            <button className='card_sell_btn'>editar</button>
        </Link>
    </div>
  )
}

export default cardEmpleado