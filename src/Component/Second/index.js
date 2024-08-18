const Second = props => {
  const {resourse, ChangeTab} = props
  const {tabId, displayText} = resourse

  const changetab = () => {
    ChangeTab(tabId)
  }
  return (
    <li>
      <button onClick={changetab}>{displayText}</button>
    </li>
  )
}
export default Second
