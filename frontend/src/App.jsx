import {useState} from 'react'
import './App.css'
import Header from './Header'
import Menu from './Menu'
import {Link} from 'react-router-dom'


function App() {

  const [contador, setContador] = useState(0);
  function increment(){
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

          

        </div>

      </section>


      <section id="spacer"></section>
    </>
  )
}

export default App
