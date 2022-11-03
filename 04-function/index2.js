nomes = ["Antonio miguel","Fernando Henrique","Ana Luiza","Geraldo do Nascimento", "Miguel Souza","Gabriel Gomes"];
letras = 0;
nome = "";

function escolh(item, indice) {
    if (nomes[indice].length > letras) {
        nome = nomes[indice];
        tamanhoNome = nomes[indice].length;
    }
}

nomes.forEach(escolh);
console.log(nome)