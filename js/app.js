function adicionar() {
    //recuperar valores: nome do produto, quantidade e valor.
    //calcular o preço, nosso subtotal
    //adicionar no carrinho
    //atualizar o valor total
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let precoUnitarioProduto = produto.split("R$")[1];
    let quantidadeDoProduto = document.getElementById("quantidade").value;
    alert(nomeProduto);
    alert(quantidadeDoProduto);
    alert(precoUnitarioProduto);
    let precoTotal = quantidadeDoProduto * precoUnitarioProduto;
    alert(precoTotal);
}

function limpar() {

}