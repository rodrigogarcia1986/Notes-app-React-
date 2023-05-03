import { useState } from 'react'

const Statistics = ({ good, neutral, bad, total }) => {
  if (total === 0) {
    return (
      <h3>No feedback given</h3>
    )
  }
  return (
    <>
      <h2>Statistics</h2>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Total" value={total} />
      <StatisticLine text="Average" value={(good - bad) / total} />
      <StatisticLine text="Positive" value={good / total * 100} />
    </>
  )
}

const Button = ({ handleGoodClick, handleNeutralClick, handleBadClick }) => {
  return (
    <>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
    </>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  const total = good + neutral + bad

  return (
    <div>
      <h1>Give us your feedback!</h1>
      <br></br>
      <Button handleGoodClick={handleGoodClick}
        handleNeutralClick={handleNeutralClick}
        handleBadClick={handleBadClick} />
      <br></br>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App

