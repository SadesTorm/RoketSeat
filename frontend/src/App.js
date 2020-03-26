import React from 'react';

import './styleGlobal.css';
import Header from './Header';
import Routes from "./routes";



function App() {


  return (
    <div>
      
     <Routes />
    
      
    </div>
  
    
    
  );
}

export default App;
  //OBS: Compontente sempre com letra Maiuscula no inicio
  // componente é uma função que restorna um HTML
  // liveReload -> troca valor da page em tempo real 
  //JSX - quando o html esta integrado dentro do Js
  //-------------------------------------------------------------------------
  // const [contador,setContador] = useState(0);
  
  //retorna array [valor variavel, função de att do valor]
  /*
  function incremento(){
    setContador(contador + 1);
    console.log(contador)
  }*/

  /*
  <div>
      
      < Header> 
      contador: {contador}
      </Header>  
      <button onClick={incremento}>Increment</button>
      
    </div>
  */

  //-------------------------------------------------------------------------------