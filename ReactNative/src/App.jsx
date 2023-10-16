import './App.css'

function App() {

  function getProfile(){
    let nome = document.getElementById('nome')

    fetch(`https://api.github.com/users/${nome}/repos`)
    .then((response) => response.json())
    .then((data) => {
    //  console.log(data)
      document.getElementById('repo').innerHTML = `
      Total de repositórios: ${data}
    `
    })
    .catch((error) => {
      console.error('Ocorreu um erro na solicitação: ' + error);
    });
  }

  return (
    <>
      <h1>Github Api</h1>

      <div>

        <input type="text" id="nome" placeholder='Nome de usuário'/>

      </div>

      <div className="show">
        <h3 id='repo'>
          {/* XXX */}
        </h3>
      </div>

      <div className="card">

        <button onClick={getProfile()}>
          Procurar
        </button>

      </div>

    </>
  )
}

export default App
