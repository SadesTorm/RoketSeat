import React ,{ useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../Services/api';
import './styles.css'
import  imageHero from '../../assets/heroes.png'
import  imageLogo from '../../assets/logo.svg'

export default function Logon(){
    const [id,setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();


        try{
            const response = await api.post('session', {id});

            localStorage.setItem('ongId',id);
            localStorage.setItem('ongNome', response.data.nome);
            
            history.push('/profile');
            console.log(response.data.nome);
        }catch(err){
            alert('Falha no login, tente novamente');
        }

    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={imageLogo} alt="Be - The - Hero"/>

                    <form onSubmit = {handleLogin}>
                        <h1>Faça seu Longon</h1>

                        <input placeholder="Sua ID"
                            value={id}
                            onChange={e => setId(e.target.value)}
                        />
                          
                        <button className = "button" type="summit"> Entrar </button>
                        <Link className="back-link" to="/register">
                            <FiLogIn size={16} color="#E02041" />
                            Cadastre-se
                        </Link>

                    </form>
                 </section>
                 <img src={imageHero} alt="HEROES"/>
        </div>
        
    );
}