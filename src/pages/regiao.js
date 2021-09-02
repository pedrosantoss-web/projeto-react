import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TabelaPaises from '../components/card/tabelaPaises'
import Titulo from '../components/tituloRegiao'
import axios from 'axios'
import './regiao.css'
import Btn from '../components/btn/btn'

export default function Regiao(props) {
    const region = props.match.params.nome
    const [paises, setPaises] = useState([])
    const [ busca, setBusca ] = useState([])
    
    async function buscarPaises() {
        const resposta = await axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
        setPaises(resposta.data)
    }

    useEffect(() => {
        buscarPaises()
    }, [])

    return (
        <div className="container">
            
            <div className="header">
            <Titulo></Titulo>
            </div>
             <Btn/>

            <TabelaPaises paises={paises}/>
            <Btn/>
        </div>
    )
}