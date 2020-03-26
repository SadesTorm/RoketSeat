import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import './styles.css'
import  imageHero from '../../assets/heroes.png'
import  imageLogo from '../../assets/logo.svg'

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={imageLogo} alt="Be - The - Hero"/>

                    <form>
                        <h1>Faça seu Longon</h1>

                        <input placeholder="Sua ID"/>
                        <button type="summit"> Entrar </button>
                        <a href="/register">
                            <FiLogIn size={16} color="#E02041" />
                            Cadastre-se
                        </a>

                    </form>
                 </section>
                 <img src={imageHero} alt="HEROES"/>
        </div>
        
    );
}