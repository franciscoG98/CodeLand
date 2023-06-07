import juegos from "./mockJuegos.js";
import "./juegosStyles.scss";
import Card from "../../components/card/Card.jsx";

const Juegos = () => {
    console.log(juegos);

    return (
        <main className="juegos_container">
            <h1>Juegos</h1>
            <section className="cards_juegos">
                {juegos.map((juego) => (
                    <Card
                        key={juego.id}
                        nombre={juego.nombre}
                        descripcion={juego.descripcion}
                        foto={juego.foto}
                        horario={juego.horario}
                        capacidad={juego.capacidad}
                    />
                ))}
            </section>
        </main>
    );
};

export default Juegos;
