function adicionar() {
    //recuperar valores: nome do produto, quantidade e valor.
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let precoUnitarioProduto = produto.split("R$")[1];
    let quantidadeDoProduto = document.getElementById("quantidade").value;
    
    let precoTotal = document.getElementById("valor-total");
    //calcular o preço, nosso subtotal
    let calculoDoPrecoTotal = quantidadeDoProduto * precoUnitarioProduto;
    //atualizar o valor total
    precoTotal.innerHTML = `R$${calculoDoPrecoTotal}`;
    
    //adicionar no carrinho
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeDoProduto}x </span>${nomeProduto}<span class="texto-azul">R$${precoUnitarioProduto}</span>
    </section>`
}

function limpar() {

}