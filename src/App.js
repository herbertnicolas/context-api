import { useState } from 'react'
import Aluno from "./components/Aluno";

function App() {
  const [ nomeAluno, setNomeAluno ] = useState('Sujeito Qualquer')

  return(
    <div>
      <h2>ESCOLA</h2>
      <hr/>
      <Aluno nome={nomeAluno} setNomeAluno={setNomeAluno}/>
    </div>
  )
}

export default App;
