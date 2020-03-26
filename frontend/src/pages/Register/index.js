import React, { useState }from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../Services/api';
import './styles.css';

import imageLogo from '../../assets/logo.svg';

export default function Register(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    
    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            nome,
            email,
            telefone,
            cidade,
            uf,
        };
        try{
        const response = await api.post('ongs',data);
        /*utiliza-se crase para uasar variavel dentro de uma string*/
        alert(`Seu ID de aceeso: ${ response.data.id}`);
         /*retorna a rota raiz assim que efetuar o cadastro*/
         history.push("/");
        } catch(err) {
            alert('Erro no cadastro, tente novamente.');
        }
       
        console.log(data);


    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={imageLogo} alt="Be - The - Hero"/>
                    <h1>Cadatro</h1>
                    <p>Faça seu cadastro, entre em nossa plataforma e ajude
                        pessoas encontrarem os casos da sua ONG.
                    </p>
                    <Link className="back-link" to="/">
                            <FiArrowLeft size={16} color="#E02041" />
                            Login
                        </Link>

                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG"
                        value={nome} 
                        onChange = {e => setNome(e.target.value)}
                    />
                    
                    <input type="email" placeholder="E-mail"
                        value={email} 
                        onChange = {e => setEmail(e.target.value)}
                    />
                    <input placeholder="WhatsApp"
                        value={telefone} 
                        onChange = {e => setTelefone(e.target.value)}
                    />

                    <div className="class-input-group">
                        <input placeholder="Cidade"
                            value={cidade} 
                            onChange = {e => setCidade(e.target.value)}
                        />
                        <input placeholder="UF" style={{width: 80}} 
                            value={uf} 
                            onChange = {e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                    </form>

            </div>



        </div>



    );
}