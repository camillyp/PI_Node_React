import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './Header'
import Menu from './Menu'

function App() {

  const[contador, setContador] = useState(0);
  
  function increment(){
    contador++;
    setContador(contador+1);
  }

  return (
    <>

      <Header title="Bem vindo" />


      <section id="center">

        <div>

          <h1>Projeto PI</h1>

          <input type="button" value="cliques" onClick={increment} />
          <p>{contador}</p> cliques!

          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>

        </div>

      </section>


      <section id="spacer"></section>
    </>
  )
}

export default App
