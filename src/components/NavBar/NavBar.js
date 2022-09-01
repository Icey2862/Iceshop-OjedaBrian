import '../../App.css';
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () =>{
    return(
        <div className='divNav'>
            <h1 className='Title'>ICESHOP</h1>
            <nav className="navFlex">
                <ul className='lista'>
                    <li>
                        <a href='#' className='Item'>Buzos</a>
                    </li>
                    <li className='drop'><a href='#' className='Item'>Remeras</a>
                        <ul className='dropdawn'>
                            <li>
                                <a href='#' className='Item'>Remeras Lisas</a>
                            </li>
                            <li>
                                <a href='#' className='Item'>Remeras Estampadas</a>
                            </li>
                        </ul>
                    </li>
                    <li> 
                        <a href='#' className='Item'>Bermudas</a>
                    </li>
                    <li> 
                        <a href='#' className='Item'>Conjuntos</a>
                    </li>
                    <li className='drop'> <a href='#' className='Item'>Accesorios</a>
                        <ul className='dropdawn'>
                            <li><a href='#' className='Item'>Relojes</a></li>
                            <li><a href='#' className='Item'>Gorras</a></li>
                            <li><a href='#' className='Item'>Anillos</a></li>
                        </ul>
                    </li>
                    <li>
                        <CartWidget/>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar