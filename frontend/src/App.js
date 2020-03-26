import React, {useState} from 'react';


import Header from './Header';
import Logon from './pages/Logon';


function App() {

  //OBS: Compontente sempre com letra Maiuscula no inicio
  // componente é uma função que restorna um HTML
  // liveReload -> troca valor da page em tempo real 
  //JSX - quando o html esta integrado dentro do Js

  const [contador,setContador] = useState(0);
  
  //retorna array [valor variavel, função de att do valor]

  function incremento(){
    setContador(contador + 1);
    console.log(contador)
  }
  
  return (
    <div>
      
      < Header> 
      contador: {contador}
      </Header>  
      <button onClick={incremento}>Increment</button>
      
    </div>
  
    
    
  );
}

export default App;
