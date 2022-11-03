const pessoa = [
    {id: 0,name: "Pedro Gomes", age: 38 },
    {id: 1,name: "Gabriel Gomes", age: 25 },
    {id: 2,name: "Gabriel pedro", age: 12 },
    {id: 3,name: "Gabriel Grabriel", age: 21 },
]

const found = pessoa.find(element => element.id);

console.log(found);