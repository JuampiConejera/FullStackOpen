import { useState } from 'react'

const NoFeedback = () => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>No feedback given</p>
    </div>
  )
}

const StatisticLine = ({value }) => {
  return (
    <big>{value}</big>
  )
}

const Statistics = ({ clicks }) => {
  const counterClicks = clicks.good + clicks.neutral + clicks.bad;
  const average = (clicks.good - clicks.bad) / counterClicks;
  const positiveValue = (clicks.good / counterClicks) * 100;
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr><td>Good: <StatisticLine value={clicks.good}/></td></tr>
          <tr><td>Neutral: <StatisticLine value={clicks.neutral} /></td></tr>
          <tr><td>Bad: <StatisticLine value={clicks.bad} /></td></tr>
          <tr><td>All: <StatisticLine value={counterClicks} /></td></tr>
          <tr><td>Average: <StatisticLine value={average} /></td></tr>
          <tr><td>Positive: <StatisticLine value={positiveValue} />%</td></tr>
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

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
  
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      {counterClicks === 0 ? <NoFeedback /> : <Statistics clicks={clicks} />}
    </div>
  )
}

export default App