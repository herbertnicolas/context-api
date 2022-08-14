import Nome from "../Nome"

function Aluno({nome, setNomeAluno}){
    return(
        <div>
            Component Alunos
            <Nome nomeAlguem={nome} setNomeAluno={setNomeAluno}/>
        </div>
    )
}
export default Aluno