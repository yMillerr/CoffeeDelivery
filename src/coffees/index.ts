import latteCoffee from '../assets/coffees-img/coffee-latte.png'
import tradicionalCoffee from '../assets/coffees-img/coffee-tradicional.png'
import americanoCoffee from '../assets/coffees-img/coffee-americano.png'
import cremosoCoffee from '../assets/coffees-img/coffee-cremoso.png'
import geladoCoffee from '../assets/coffees-img/coffee-gelado.png'
import comLeiteCoffee from '../assets/coffees-img/coffee-comLeite.png'
import capuccinoCoffee from '../assets/coffees-img/coffee-capuccino.png'
import macchiatoCoffee from '../assets/coffees-img/coffee-macchiato.png'
import mocaccinoCoffee from '../assets/coffees-img/coffee-mocaccino.png'
import chocolateQuenteCoffee from '../assets/coffees-img/coffee-chocolateQuente.png'
import cubanoCoffee from '../assets/coffees-img/coffee-cubano.png'
import havaianoCoffee from '../assets/coffees-img/coffee-havaiano.png'
import arabeCoffee from '../assets/coffees-img/coffee-arabe.png'
import irlandesCoffee from '../assets/coffees-img/coffee-irlandes.png'

export const allCoffes = [
  {
    id: 1,
    title: 'Latte',
    description: 'Café com latte',
    coffeeImg: latteCoffee,
    tags: ['latte', 'com leite'],
    price: 9.90,
    amount: 1,
  },
  {
    id: 2,
    title: 'Café tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    coffeeImg: tradicionalCoffee,
    tags: ['tradicional'],
    amount: 1,
    price: 9.90,
  },
  {
    id: 3,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    coffeeImg: americanoCoffee,
    tags: ['tradicional'],
    amount: 1,
    price: 9.90,
  },
  {
    id: 4,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    coffeeImg: cremosoCoffee,
    tags: ['tradicional'],
    amount: 1,
    price: 9.90,
  },
  {
    id: 5,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    coffeeImg: geladoCoffee,
    tags: ['tradicional', 'Gelado'],
    amount: 1,
    price: 9.90,
  },
  {
    id: 6,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    coffeeImg: comLeiteCoffee,
    tags: ['tradicional', 'Com leite'],
    amount: 1,
    price: 9.90,
  },
  {
    id: 7,
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    coffeeImg: capuccinoCoffee,
    tags: ['tradicional', 'Com leite'],
    amount: 1,
    price: 9.90,
  },
  {
    id: 8,
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    coffeeImg: macchiatoCoffee,
    tags: ['tradicional', 'Com leite'],
    amount: 1,
    price: 9.90,
  },
  {
    id: 9,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    coffeeImg: mocaccinoCoffee,
    tags: ['tradicional', 'Com leite'],
    amount: 1,
    price: 9.90,
  },
  {
    id: 10,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    coffeeImg: chocolateQuenteCoffee,
    tags: ['tradicional', 'Com leite'],
    amount: 1,
    price: 9.90,
  },
  {
    id: 11,
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    coffeeImg: cubanoCoffee,
    tags: ['tradicional', 'Gelado', 'Alcoólico'],
    amount: 1,
    price: 9.90,
  },
  {
    id: 12,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    coffeeImg: havaianoCoffee,
    tags: ['Especial'],
    amount: 1,
    price: 9.90,
  },
  {
    id: 13,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    coffeeImg: arabeCoffee,
    tags: ['Especial'],
    amount: 1,
    price: 9.90,
  },
  {
    id: 14,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    coffeeImg: irlandesCoffee,
    tags: ['Especial', 'Alcoólico'],
    amount: 1,
    price: 9.90,
  },
]