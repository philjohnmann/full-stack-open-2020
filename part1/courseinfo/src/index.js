import React from 'react'
import ReactDOM from 'react-dom'

const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

const Header = (props) => {
  return (
  <div>
    <h1>{props.pcourse}</h1>
  </div>
  )
}

const Content = (props) => {
  return (
  <div>
    <h2>Part:</h2>
    <p><strong>{props.ppart}</strong>, # exercises: {props.pexercises}</p>
  </div>
  )
}

const Total = () => {
  return (
  <div>
    <h2>Totals:</h2>
    <p>Number of exercises: {exercises1 + exercises2 + exercises3}</p>
  </div>
  )
}

const App = () => {
  return (
    <div>
      <Header pcourse={course} />
      <Content ppart={part1} pexercises={exercises1} />
      <Content ppart={part2} pexercises={exercises2} />
      <Content ppart={part3} pexercises={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))