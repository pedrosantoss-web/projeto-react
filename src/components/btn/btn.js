import { Link } from "react-router-dom";
import './btn.css'


export default function Btn() {
    return(
        <Link className="link" to={'/'}><p>voltar</p></Link>
    )
}
