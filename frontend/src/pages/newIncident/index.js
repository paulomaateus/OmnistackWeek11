import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css'
import logoImg from "../../assets/logo.svg"
import {FiArrowLeft} from 'react-icons/fi'

export default function NewIncident(){
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg}alt="Be the Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva seu caso detalhadamente para encontrar um herói para resolver isso.</p>
                    
                    <Link className= "back-link" to = "/profile">
                        <FiArrowLeft size = {16} color = "#E02041"/> 
                        Voltar para home
                    </Link>
                </section>
                <form>
                    <input placeHolder="Título do caso" />
                    <textarea placeHolder= "Descrição"/>
                    <input placeHolder = "Valor em reais" />
        
                    <button className = "button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}