import { useState } from 'react'


const App = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleGoodClick = () => {
    const newClick = {
      ...clicks,
      good: clicks.good + 1
    }
    setClicks(newClick)
  }

  const handleNeutralClick = () => {
    const newClick = {
      ...clicks,
      neutral: clicks.neutral + 1
    }
    setClicks(newClick)
  }

  const handleBadClick = () => {
    const newClick = {
      ...clicks,
      bad: clicks.bad + 1
    }
    setClicks(newClick)
  }

  const counterClicks = clicks.good + clicks.neutral + clicks.bad;

  const average = (clicks.good - clicks.bad) / counterClicks;

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <h1>statistics</h1>
      <p>Good {clicks.good}</p>
      <p>Neutral {clicks.neutral}</p>
      <p>Bad {clicks.bad}</p>
      <p>All {counterClicks}</p>
      <p>Average {average}</p>
      <p>Positive {(clicks.good / counterClicks)*100}%</p>
    </div>
  )
}

export default App