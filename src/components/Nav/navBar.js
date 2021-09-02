import axios from "axios";
import Titulo from "../Titulo";
import './Nav.css'
import Logo from '../../img/mapa.jpg';

export default function Nav() {
    return(
        <div className="container">
            <nav className="nav">
                <img className="img" src={Logo}/>
                <a className="btn" href="">Sobre</a>
            </nav>
            <div className="tit">
                <Titulo/>
           </div>
        </div>
    )
}