const buscaInput = document.getElementById('busca')

const filtrarLista = (listaDeDados, valorInput, booleanLista) => listaDeDados
  .filter(listaDeDados => {
   const listaFiltrada = listaDeDados.textContent.toLowerCase().includes(valorInput)
    return booleanLista ? listaFiltrada : !listaFiltrada
  })

const esconderLista = (listaDeDados, valorInput) => {
  filtrarLista(listaDeDados, valorInput, false)
  .forEach(lista => {
    lista.classList.add('hidden')
  })
}

const mostrarLista = (listaDeDados, valorInput) => {
filtrarLista(listaDeDados, valorInput, true)
.forEach(lista => {
    lista.classList.remove('hidden')
  })  
}

buscaInput.addEventListener('input', event => {
const valorInput = event.target.value.trim().toLowerCase()
const listaDeDados = Array.from(document.getElementsByTagName("tr"))

esconderLista(listaDeDados, valorInput)
mostrarLista(listaDeDados, valorInput)
})