function adicionar() {
    //recuperar valores: nome do produto, quantidade e valor.
    //calcular o preço, nosso subtotal
    //adicionar no carrinho
    //atualizar o valor total
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let precoUnitarioProduto = produto.split("-")[1];
    let quantidadeDoProduto = document.getElementById("quantidade");
    alert(nomeProduto);
    alert(precoUnitarioProduto);
}

function limpar() {

}