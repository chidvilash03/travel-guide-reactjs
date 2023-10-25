import './index.css'

const Card = props => {
  const {item} = props
  const {name, description} = item
  return (
    <li className="card-container">
      <img src={item.image_url} alt={name} className="card-img" />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}
export default Card
