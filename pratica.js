import "./styles.css";

//mesma coisa as duas funções:

//const getMultiplier = (multiplier) => (aNumber) => aNumber * multiplier;
//a funcao getMultiplier recebe o parametro multiplier que tem uma funcao anonima que retorna aNumber * multiplier

function getMultiplier(multiplier) {
  return function (aNumber) {
    return aNumber * multiplier;
  };
}

const double = getMultiplier(2);
const triple = getMultiplier(3);
const quadruple = getMultiplier(4);

console.log("função getMultiplier:", double(3));

//MAP
//o map recebe uma função como argumento, e ele pode receber um segundo argumento opcional, que é o valor a ser usado como this(evitar usar o this)
//numbers.map((item, index, array) => )
//map é uma hof que recebe tres parâmetros 'item'(item do array que ta sendo iterado atualmente), 'index'(posição do item que ta sendo iterado), 'array'(proprio array que ta sendo iterado)
//Quando usar o map: quando quiser obter um novo array com a mesma quantidade de itens do array original mas, com cada item transformado. Ou seja vai copiar tudo e modificar conforme o argumento passado

const numbers = [1, 2, 3];
const squareNumbers = numbers.map((item) => item ** 2);

console.log("resultado do map:", squareNumbers);

//exemple map:

const tvShows = [
  { name: "breaking bad", releaseYear: 2009 },
  { name: "mr. robot", releaseYear: 2008 },
  { name: "haniball", releaseYear: 2007 },
  { name: "house", releaseYear: 2006 },
  { name: "greys anatomy", releaseYear: 2005 },
  { name: "watchman", releaseYear: 2004 },
];

const arrayNomes = tvShows.map((nameShow) => nameShow.name); // ou desestruturando: const arrayNomes = tvShows.map(({name}) => name)
console.log("nomes das series:", arrayNomes);

//FILTER
//Quando usar o map: quando quiser obter um novo array só com alguns itens do array original
//variável.filter(()=>{})
//filter é uma hof que recebe tres parâmetros 'item'(item do array que ta sendo iterado atualmente), 'index'(posição do item que ta sendo iterado), 'array'(proprio array que ta sendo iterado)

//exemplo filter:

const randomNumbers = [36, 99, 37, 63];
const numbersgreaterThan37 = randomNumbers.filter((item) => item > 37);
console.log("numeros maiores que 37:", numbersgreaterThan37);

//another exemple filter:
const tarantinoMovies = [
  { name: "Reservoir Dogs", year: 1992 },
  { name: "Pulp Fiction", year: 1994 },
  { name: "Jackie Brown", year: 1997 },
  { name: "Kill Bill: Vol. 1", year: 2003 },
  { name: "Kill Bill: Vol. 2", year: 2004 },
  { name: "Death Proof", year: 2007 },
  { name: "Inglourious Basterds", year: 2009 },
  { name: "Django Unchained", year: 2012 },
  { name: "The Hateful Eight", year: 2015 },
  { name: "Once Upon a Time in Hollywood", year: 2019 },
];

const moviesBefore2000 = tarantinoMovies.filter((item) => item.year < 2000); //ou const moviesBefore2000 = tarantinoMovies.filter(({year})=> year < 2000)
console.table("filmes antes dos anos 2000:", moviesBefore2000);
const moviesNamesBefore2000 = tarantinoMovies.filter(
  (item) => item.name === "Pulp Fiction"
);
console.table("filmes com nomes pulp fiction:", moviesNamesBefore2000);

//another exemple filter using INCLUDES:

const firstTravelerCities = [
  "Sydney",
  "Berlim",
  "Lisboa",
  "Sófia",
  "Praga",
  "Bali",
  "Florianópolis",
];

const secondTravelerCities = [
  "Praga",
  "Roma",
  "Chiang Mai",
  "Lisboa",
  "Zagreb",
];

const commomCities = firstTravelerCities.filter(
  (item) => secondTravelerCities.includes(item) //dentro de secondTravelerCities inclui algo de 'item', se sim, imprime
);
console.log("lugares em comum", commomCities);
//explicação:
//console.log(['oi', 'ola', 'eai'].includes('hi')). dentro desse array há 'hi'? se sim, imprime true. Se não, imprime 'false'.

//REDUCE:
//reduz o valor do array à um unico resultado
//exemple:
const numbersReduce = [1, 2, 3];
const sum = numbersReduce.reduce((accumulator, item) => accumulator + item, 0); //accumulator vai receber o valor zero inicialmente, item vai passar por todos os valores do array e somar com accumulator, acucumulator vai armazenar a soma e passar para o próximo valor do array. Zero é o valor inicial
console.log("valor da soma do reduce:", sum);

//exemple reduce:
const cart = [
  { name: "Dark Souls III", price: 95.03 },
  { name: "Shadow of the Tomb Raider", price: 101.19 },
  { name: "Sekiro: Shadows Die Twice", price: 179.99 },
  { name: "Resident Evil 2", price: 119.9 },
  { name: "Death Stranding", price: 149.99 },
];

const sumItemsCard = cart.reduce(
  (accumulate, item) => `${accumulate} , ${item.name}`,
  ""
);
console.table("itens do carrinho:", sumItemsCard);

//exemple reduce:
const people = [
  { id: 5, name: "Angelica", age: 18, federativeUnit: "Pernambuco" },
  { id: 81, name: "Thales", age: 19, federativeUnit: "São Paulo" },
  { id: 47, name: "Ana Carolina", age: 18, federativeUnit: "Alagoas" },
  { id: 87, name: "Felipe", age: 18, federativeUnit: "Minas Gerais" },
  { id: 9, name: "Gabriel", age: 20, federativeUnit: "São Paulo" },
  { id: 73, name: "Aline", age: 19, federativeUnit: "Brasília" },
];

const reduceAge18 = people.reduce(
  (accumulator, item) => accumulator + item.age.filter(18),
  {}
);
console.log("reduce ages 18:", reduceAge18);
