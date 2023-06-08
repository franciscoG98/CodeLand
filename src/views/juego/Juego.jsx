import { useParams } from "react-router-dom";
import mockJuegos from '../juegos/mockJuegos.js'
import mockCompradores from './mockCompradores.js'
import './juegoStyles.scss'

const Juego = () => {

    const { id } = useParams();

    const juegoSeleccionado = mockJuegos.filter(juego => juego.id == id)

    const juego = juegoSeleccionado[0]

    return (
        <main className="juego_container">
            <section className="juego">
                <h1 className='juego_title'>{juego.nombre}</h1>
                <img className='juego_img' src={juego.foto} alt={juego.nombre} />
                <p className='juego_description'>{juego.descripcion}</p>
                <span>Horario: {juego.horario}</span>
                <br />
                <span>Capacidad: {juego.capacidad}</span>
                <span>precio: $$$</span>
            </section>
            <section className="comprador">
                <select>
                    {mockCompradores.map( comprador => (
                        <option key={comprador.id}>{comprador.nombre + ' ' + comprador.apellido}</option>
                    ))}
                </select>
                <button>Vender</button>
            </section>
        </main>
    )
}

export default Juego