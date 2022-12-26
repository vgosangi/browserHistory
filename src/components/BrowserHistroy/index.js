import './index.css'

const BrowserHistory = props => {
  const {historyDetails, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="user-card-container">
      <p>{timeAccessed}</p>
      <div>
        <img src={logoUrl} alt="domain logo" />
        <p> {title} </p>
        <p>{domainUrl}</p>
      </div>
      <button type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default BrowserHistory
