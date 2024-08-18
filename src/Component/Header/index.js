import './index.css'

const Header = props => {
  const {count, score} = props

  return (
    <li>
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
        className="image"
        alt="website logo"
      />
      <p>Score:{score}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
        alt="timer"
      />
      <p>{count} sec</p>
    </li>
  )
}

export default Header
