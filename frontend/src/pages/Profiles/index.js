import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi'

import api from '../../Services/api';
import imageLogo from '../../assets/logo.svg';
import './styles.css';

export default function Profiler(){
    const [incidentes, setIncidentes] = useState([]);

    const history = useHistory();
    
    const ongNome = localStorage.getItem('ongNome');
    const ongId = localStorage.getItem('ongId');
     
        useEffect(() =>{ 
            
            api.get('profile', { 
                headers: {            
                    Authorization: ongId,                
                }            
            }).then(response =>{
        
            setIncidentes(response.data);
        
        })
        
        }, [ongId]);

    async function handleIncidentDelete(id){
        try{

            await api.delete(`incidents/${id}`, {
                headers:{
                    Authorization: ongId,
                }
            });
            // atualizando array de incidente para excluir o caso da visualização
            setIncidentes(incidentes.filter(incident=> incident.id != id));   

        }catch(err){
            alert=('Erro ao deletar caso, tente novamente');
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={imageLogo} alt="Be - The - Hero"/>
                <span>Bem Vinda, {ongNome} </span>
                
                <Link className="button" to="/incidents/new"> Cadastrar no caso </Link> 
                
                <button onClick = {handleLogout}  type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>                
            
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {incidentes.map(incidents => (   
                    <li key={incidents.id}>
                        <strong>CASO:</strong>
                        <p>{incidents.titulo}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incidents.descricao}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL' } ).format(incidents.valor)}</p>
                        
                         <button onClick={() => handleIncidentDelete(incidents.id)} type="button">
                           <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>

                </li>))}
               
            </ul>
        </div>
    );
}