import Card from './Card';

const cards = [];
const files = require.context('./Cards/', true, /.json$/);

files.keys().forEach((fileName) => {
  const cardData = files(fileName);
  const card = new Card(cardData);
  cards.push(card);
});

export default cards;
