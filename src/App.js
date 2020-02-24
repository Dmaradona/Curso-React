import React from 'react';

function ComponenteFuncional() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

class App extends React.Component{

  state = {
    nome : ''
  }

  constructor(){
    super()
    this.modificarNome = this.modificarNome.bind(this)
  }

  modificarNome(event){ /* ESTE MODELO DE FUNÇÃO PRECISA FAZER O .BIND() NO CONSTRUCTO */
    this.setState({
      nome : event.target.value
    })
  }

  /*modificarNome2 = (event) => { // ESTE MODELO DE FUNÇÃO NÃO PRECISA FAZER O .BIND() "ARROWFUNCTION" É MAIS FÁCIL
    this.setState({
      nome : event.target.value
    })
  }*/

  criaComboBox = () => {
    const opcoes = [ "Fulano", "Ciclano"]
    // A FUNÇÃO MAP PERCORRE O ARRAY E RETORNA A ESTRUTURA DETERMINADA PARA CADA ITEM (NÃO PRECISA DE RETURN NESSA ARROW FUNC POR SER EXPLICITO)
    const comboBoxOptions = opcoes.map( opcao => <option>{ opcao }</option> )

    return(
      <select>
        { comboBoxOptions }
      </select>
    )

  }

    /* DENTRO DO RENDER SÓ PODE RETORNAR UM NÓ OU UM AGRUPADO EM UMA DIV OU USAR A NOMENCLATURA <> QUE AÍ ENTENDE-SE QUE É UM GRUPO DE COMPONENTES*/
  render(){
    /* OUTRA FORMA DE CRIAR COMPONENTE */
    const MeuComboBox = () => this.criaComboBox()

    return(
    <> 
      <input type="text" value={ this.state.nome } onChange={ this.modificarNome } />
      <h1>Hello { this.state.nome }</h1>
      { this.criaComboBox() }
      <MeuComboBox></MeuComboBox>
    </>
    )
  }
}

export default App;
