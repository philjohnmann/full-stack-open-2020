import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = (props) => {
  let good = props.good
  let bad = props.bad
  let neutral = props.neutral
  let all = props.all
  let avg = (good - bad) / all
  let pos = ((good) / all) * 100
  if (isNaN(avg)) { avg = 0 }
  if (isNaN(pos)) { pos = 0 }
  return (
    <ul>
      <li>good {good}</li>
      <li>neutral {neutral}</li>
      <li>bad {bad}</li>
      <li>all {all}</li>
      <li>average {avg}</li>
      <li>positive {pos}%</li>
    </ul>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const zeroAll = () => {
    setGood(0)
    setNeutral(0)
    setBad(0)
    setAll(0)
  }

  const handleAll = () => {
    setAll(all + 1)
  }

  const handleGood = () => {
    setGood(good + 1)
    handleAll()
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    handleAll()
  }

  const handleBad = () => {
    setBad(bad + 1)
    handleAll()
  }
  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
        <br />
        <button onClick={zeroAll}>reset</button>
      </div>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)