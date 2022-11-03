const nomes = [
    {id: 0,name: "Fabiana Araujo", age: 38 },
    {id: 1,name: "Gabriel Gomes", age: 25 },
    {id: 2,name: "Fernando Herique", age: 12 },
    {id: 3,name: "Ana luiza", age: 21 },
    {id: 4,name: "Gelrado do Nascimento", age: 21 },
    {id: 5,name: "Migeul Sousa", age: 21 },
    {id: 6,name: "Antonio Miguel", age: 21 },
   
]

function escolha(item, indice){
    nomes[indice] = nomes[indice]
}

nomes.map(escolha);
console.log(nomes);
