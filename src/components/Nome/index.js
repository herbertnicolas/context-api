function Nome({nomeAlguem, setNomeAluno}){
    return(
        <div>
            Bem-vindo: <span style={{color: '#FF4000'}}>{nomeAlguem}</span>
            <br/>
            <button onClick={()=>{setNomeAluno("Fulano")}}>Troca Nome</button>
        </div>
    )
}
export default Nome