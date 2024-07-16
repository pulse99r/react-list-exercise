import "./Card.css"
const Card = ({card}) => {
  return (
    <div className="card">
      <h3>{card.tagline}</h3>
      <p>{card.description}</p>
      <input type="search" name="search" id="search" value={card.buttonText}/>
    </div>
  )
}

export default Card;
