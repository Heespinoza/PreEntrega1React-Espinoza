import { Link } from 'react-router-dom'
import './Item.css'
const Item = ({id, nombre, descripcion, precio, stock, tipo, marca}) => {
    return (
        <article className='card'>
            <header className='card-title'>
                {nombre}
            </header>
            <section className='card-description'>
                <p>
                    Tipo: {tipo}
                </p>
                <p>
                    Marca: {marca}
                </p>
                <p className='card-description'>
                    Descripcion: {descripcion}
                </p>
                <p className='card-price'>
                    Precio: ${precio}
                </p>
            </section>
            <footer >
                <Link className='card-button' to={`/item/${id}`}>Ver Mas</Link>
                
            </footer>
        </article>
    )
}
export default Item