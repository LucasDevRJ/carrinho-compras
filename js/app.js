var acumuladorDePreco;

function adicionar() {
    //recuperar valores: nome do produto, quantidade e valor.
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let precoUnitarioProduto = produto.split("R$")[1];
    let quantidadeDoProduto = document.getElementById("quantidade").value;

    if (quantidadeDoProduto < 1) {
        alert("Digite uma quantidade maior ou igual a 1!!");
    } else {
        //calcular o preço, nosso subtotal
        let precoTotal = document.getElementById("valor-total");
        let calculoDoPrecoTotal = quantidadeDoProduto * precoUnitarioProduto;
        
        //adicionar no carrinho
        let carrinho = document.getElementById("lista-produtos");
        carrinho.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidadeDoProduto}x </span>${nomeProduto}<span class="texto-azul">R$ ${precoUnitarioProduto}</span>
        </section>`;

        //atualizar o valor total
        acumuladorDePreco += calculoDoPrecoTotal;
        precoTotal.innerHTML = `R$${acumuladorDePreco}`;
        document.getElementById("quantidade").value = 0;
    }
}

function limpar() {
    acumuladorDePreco = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = `R$ ${acumuladorDePreco}`;
}

limpar();