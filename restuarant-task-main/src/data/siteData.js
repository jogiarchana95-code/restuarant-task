import {
  beef,
  burger,
  chicken,
  salad,
  pizza,
  drinks,
  dessert,
  productCollection,
  applePie,
  buffaloWings,
  macaroni,
  salmon,
} from '../assets/images';

export const categories = [
  { name: 'Beef', image: beef },
  { name: 'Burger', image: burger },
  { name: 'Chicken', image: chicken },
  { name: 'Salad', image: salad },
  { name: 'Pizza', image: pizza },
  { name: 'Drinks', image: drinks },
  { name: 'Dessert', image: dessert }
];

export const products = [
  {
    name: 'Grilled Beef Steak',
    category: 'Beef',
    price: '$18.90',
    tag: 'BEST',
    image: beef
  },
  {
    name: 'Garden Fresh Salad',
    category: 'Salad',
    price: '$10.50',
    tag: 'NEW',
    image: salad
  },
  {
    name: 'Classic Tomato Pasta',
    category: 'Pasta',
    price: '$13.90',
    tag: '',
    image: macaroni
  },
  {
    name: 'Crispy Chicken Burger',
    category: 'Burger',
    price: '$12.99',
    tag: 'HOT',
    image: burger
  },
  {
    name: 'Loaded Tacos',
    category: 'Special',
    price: '$11.50',
    tag: '',
    image: productCollection
  },
  {
    name: 'Roasted Chicken',
    category: 'Chicken',
    price: '$16.90',
    tag: 'BEST',
    image: chicken
  },
  {
    name: 'Pepperoni Pizza',
    category: 'Pizza',
    price: '$14.50',
    tag: 'NEW',
    image: pizza
  },
  {
    name: 'Grilled Salmon',
    category: 'Seafood',
    price: '$19.90',
    tag: '',
    image: salmon
  }
];

export const menuHighlights = [
  { title: 'Beef', text: 'More than 40 different types of food.', image: beef },
  { title: 'Hamburger', text: 'More than 40 different types of food.', image: burger },
  { title: 'Apple Pie', text: 'A classic American dish.', image: applePie },
  { title: 'Buffalo Wings', text: 'Discover our menu and order delivery.', image: buffaloWings },
  { title: 'Macaroni and Cheese', text: 'A creamy, comforting dish made from cooked pasta.', image: macaroni },
  { title: 'Beef', text: 'Discover our menu and order delivery.', image: beef },
  { title: 'Salmon', text: 'Get the freshest salmon and ocean trout.', image: salmon }
];