/*
quando clicar no pokemon da listagem temos que esconder o cartao do pokemon que estava aberto e mostrar o cartao do pokemon que clicar

pra isso vamos precisar trabalhar com dois elementos
1- listagem
2- cartao pokemon

precisamos criar duas variaveis no JS pra trabalhar com os elementos da tela

vamos precisar trabalhar com evento de clique feito pelo usuariona listagem de pokemons

- remover a classe aberto só do cartao que esta aberto
- ao clicar em um pokemon da listagem, pegamos o id do pokemon pra saber qual cartao mostrar
-remover a classe ativa que marca o pokemon selecionado
-adicionar a classe ativo no item da lista selecionado
*/

/* precisamos criar duas variaveis no JS pra trabalhar com os elementos da tela
 */

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonscard = document.querySelectorAll('.cartao-pokemon')

// vamos precisar trabalhar com evento de clique feito pelo usuariona listagem de pokemons
listaSelecaoPokemons.forEach(pokemon => {
  pokemon.addEventListener('click', () => {
    const cartaoPokemonAberto = document.querySelector('.aberto')

    cartaoPokemonAberto.classList.remove('aberto')

    const idPokemonSelecionado = pokemon.attributes.id.value

    const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
    const cartaoPokemonParaAbrir = document.getElementById(
      idDoCartaoPokemonParaAbrir
    )
    cartaoPokemonParaAbrir.classList.add('aberto')

    //remove a classe ativo que marca o pokemon selecionado
    const pokemonAtivoNaListagem = document.querySelector('.ativo')
    pokemonAtivoNaListagem.classList.remove('ativo')

    const idPokemonSelecionadoNaListagem =
      document.getElementById(idPokemonSelecionado)
    idPokemonSelecionadoNaListagem.classList.add('ativo')
  })
})
