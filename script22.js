let quantidadeEstoque = parseInt(prompt("Digite a quantidade atual em estoque:"))
    let quantidadeMaxima = parseInt(prompt("Digite a quantidade máxima em estoque:"))
    let quantidadeMinima = parseInt(prompt("Digite a quantidade mínima em estoque:"))

    // Calculando a quantidade média
    let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2

    // Exibindo a quantidade média
    console.log(`Quantidade média: ${quantidadeMedia}`)

    // Verificando se deve efetuar a compra
    if (quantidadeEstoque >= quantidadeMedia) {
        console.log("Não efetuar compra")
    } else {
        console.log("Efetuar compra")
    }