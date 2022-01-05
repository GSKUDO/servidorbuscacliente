let clientes = [];
let tabela = [];

function carregarcliente() {
    fetch('/users')
        .then(resposta => resposta.json())
        .then(texto => {
            clientes = texto
            console.log(clientes)
            console.log(Array.isArray(clientes))

            let comparativo = document.getElementById("campobusca").value;
            
            clientes.forEach((elemento, indice) => {
                if (parseInt(comparativo) === parseInt(elemento.id)){
                    tabela.push(clientes[indice])
                    console.log(tabela)
                    document.getElementById("mostraID").innerHTML = clientes[indice].id
                    document.getElementById("mostranome").innerHTML = clientes[indice].name
                    document.getElementById("mostraemail").innerHTML = clientes[indice].email
                }
            });
        })
}       
            