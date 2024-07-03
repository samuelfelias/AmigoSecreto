let listaNomes = []
let lista = document.getElementById("lista-amigos")
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function adicionar(){
    let nome = capitalize(document.getElementById("nome-amigo").value)
    if(nome == ""){
        alert("Digite o nome!")
        return
    }

    if (listaNomes.includes(nome)) {
        alert("Nome já adcionado!")
        return
    } else {
        listaNomes.push(nome)
    }
    if(lista.textContent == ""){
        lista.textContent = nome
    }else{
        lista.textContent = lista.textContent + `, ${nome}`
    }

    nome.value = ""
}
function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

let listaSorteados = document.getElementById("lista-sorteio")
function sortear(){
    if(listaNomes.length < 4){
        alert('Digite pelo menos 4 amigos para acontecer o sorteio')
        return
    }
    embaralha(listaNomes)
    for(let i = 0; i < listaNomes.length; i++){
        if(i == listaNomes.length - 1){
            listaSorteados.innerHTML = listaSorteados.innerHTML + `${listaNomes[i]} --> ${listaNomes[0]}` + "<br>"
        }else{
            listaSorteados.innerHTML = listaSorteados.innerHTML + `${listaNomes[i]} --> ${listaNomes[i+1]}` + "<br>"
        }
 
    }
}

function reiniciar(){
    listaNomes = []
    document.getElementById("nome-amigo").value = ""
    document.getElementById("lista-amigos").textContent = ""
    listaSorteados.innerHTML = ``
}