import React, { useState } from 'react'
import './App.css';

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistic = (props) => {
  return (
    <tr><td>{props.text}</td><td>{props.value}{props.add}</td></tr>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <p><strong>Enter feedback to begin.</strong></p>
      </div>
    )
  }
  return (
    <div>
    <table>
    <tbody>
    <Statistic text="good" value={props.good} />
    <Statistic text="neutral" value={props.neutral} />
    <Statistic text="bad" value={props.bad} />
    <Statistic text="all" value={props.all} />
    <Statistic text="Average" value= {(props.good-props.bad)/props.all} />
    <Statistic text="Positive" value={(props.good/props.all)*100} add="%"/>
    </tbody>
    </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => {
          setGood(good+1)
          setAll(all+1)
      }
        } text="good" />
      <Button handleClick={() => {
        setNeutral(neutral+1)
        setAll(all+1)
      }
      } text="neutral" />
      <Button handleClick={() => {
        setBad(bad+1)
        setAll(all+1)
      }
      } text="bad" />
      <h2>Statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} />
    </div>
  )
}


export default App;
