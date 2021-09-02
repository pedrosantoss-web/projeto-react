import React from "react"
import { Link } from "react-router-dom"
import './card.css'

export default function listarPaises({ paises }) {
    return (
        <div className="">
           
              
                <ul className="App">
                   
                    {paises.map((pais) => 
                       
                        <li className="card" >
                           <Link className="link" to={`/regiao/${pais.region}`} >
                           <img src={pais.flag} />
                           <h3 className="h3">{pais.name}</h3>
                           <h3 className="h3">{pais.capital}</h3>
                           
                            <h3 className="h3">{pais.region}</h3>
                            </Link>
                        </li>
                        
                        
                    )}

                       
                      
                </ul>
                
                
                 
            
        </div>
    )
}