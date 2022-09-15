import '../../App.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
const NavBar = () =>{
    return(
        <div className='divNav'>
            <h1 className='Title'>ICESHOP</h1>
            <nav className="navFlex">
                <ul className='lista'>
                    <li>
                        <NavLink
                        to={"/home"}
                        style={({isActive})=>
                            isActive
                            ?{fontWeight:"bold", color:"#61dafb", textDecoration: "none"}
                            :{color: "white", textDecoration:"none"}
                        }>
                        Home
                        </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to={"category/about"}
                        style={({isActive})=>
                            isActive
                            ?{fontWeight:"bold", color:"#61dafb", textDecoration: "none"}
                            :{color: "white", textDecoration:"none"}
                        }>
                        About
                        </NavLink>
                    </li>
                    <li> 
                    <NavLink
                        to={"category/contact"}
                        style={({isActive})=>
                            isActive
                            ?{fontWeight:"bold", color:"#61dafb", textDecoration: "none"}
                            :{color: "white", textDecoration:"none"}
                        }>
                        Contact
                        </NavLink>
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