import './index.css'

const AppItem = props => {
  const {eachAppItem} = props
  const {appName, imageUrl} = eachAppItem

  return (
    <li className="App">
      <img src={imageUrl} className="app-logo" alt={appName} />
      <p className="App-name">{appName}</p>
    </li>
  )
}

export default AppItem
