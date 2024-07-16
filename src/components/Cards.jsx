import "./Cards.css"
import Card from './Card.jsx';
import cards from "../data/cards.jsx"

const Cards = () => {
console.log(cards)
  return (
    <div className="card-container">
     {cards.map((card) => <Card card={card}/>)}
    </div>
  )
}

export default Cards;
