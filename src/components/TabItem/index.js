import './index.css'

const TabItem = props => {
  const {eachTabItem, onChangeTab, isActive} = props
  const {tabId, displayText} = eachTabItem

  const onClick = () => {
    onChangeTab(tabId)
  }

  const activeTabClassName = isActive ? 'active-button' : ''

  return (
    <>
      <li>
        <button
          className={`button ${activeTabClassName}`}
          type="button"
          onClick={onClick}
        >
          {displayText}
        </button>
      </li>
    </>
  )
}

export default TabItem
