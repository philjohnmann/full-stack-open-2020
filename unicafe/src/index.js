import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = (props) => {
  let good = props.good
  let bad = props.bad
  let neutral = props.neutral
  let all = props.all
  console.log(good, bad, neutral, all)
  let avg = (good - bad) / all
  let pos = ((good) / all) * 100
  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  } else { 
    return (
      <table>
      <tbody>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="total" value={all} />
      <Statistic text="average" value={avg} />
      <Statistic text="positive" value={pos} add="%"/>
        </tbody>
        </table>
    )
}
}

const Statistic = ({text, value, add}) => {
  return (
    <tr>
    <td>{text}</td>
    <td>{value} {add}</td>
    </tr>
  )
}

const Button = ({action, text}) => {
  return (
    <button onClick={action}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const zeroAll = () => {
    setGood(0)
    setNeutral(0)
    setBad(0)
  }


  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button action={handleGood} text="good" />
        <Button action={handleNeutral} text="neutral" />
        <Button action={handleBad} text="bad" />
        <Button action={zeroAll} text="reset" />
      </div>
      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} all={good+bad+neutral} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)