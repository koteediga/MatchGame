const WinCart = props => {
  const {score, reStart} = props
  const restart = () => {
    reStart()
  }
  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p>YOUR SCORE</p>
      <p>{score}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
        alt="reset"
      />
      <button onClick={restart}>PLAY AGAIN</button>
    </div>
  )
}

export default WinCart
