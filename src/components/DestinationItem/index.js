// Write your code here
import './index.css'

const DestinationItem = props => {
  const {id, name, imgUrl} = props
  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
