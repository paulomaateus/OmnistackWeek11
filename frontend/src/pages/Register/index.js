import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

import logoImg from "../../assets/logo.svg"

export default function Register(){
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[whatsapp,setWhatsapp] = useState('');
    const[city,setCity] = useState('');
    const[uf,setUF] = useState('');
    
    const history = useHistory();    
    async function handleRegister(e){
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };
        try{
            const response = await api.post('ongs', data)

            alert(`Seu id de acesso: ${response.data.id}`)

            history.push('/');
        }catch(err){
            alert('Erro no cadastro, tente novamente.')
        }
    }
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg}alt="Be the Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadasto, entre na plataforma e ajuda pessoas a encontrarem os casos da sua ONG.</p>
                    
                    <Link className= "back-link" to = "/">
                        <FiArrowLeft size = {16} color = "#E02041"/> 
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit= {handleRegister}>
                    <input 
                        placeHolder="Nome da ONG"
                        value = {name}
                        onChange = {e => setName(e.target.value)} />
                    
                    <input 
                        type = "email" 
                        placeHolder= "E-mail"
                        value = {email}
                        onChange = {e => setEmail(e.target.value)}/>
                    <input 
                        placeHolder = "Whatsapp"
                        value = {whatsapp}
                        onChange = {e => setWhatsapp(e.target.value)} />
                    
                    <div className="input-group">
                        <input 
                            placeHolder="Cidade"
                            value = {city}
                            onChange = {e => setCity(e.target.value)}/>
                        
                        <input 
                            placeHolder="UF" 
                            style ={{width: 80}}
                            value = {uf}
                            onChange = {e => setUF(e.target.value)}/>
                    </div>
                    <button className = "button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}