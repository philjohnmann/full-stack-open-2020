import React from 'react'
import ReactDOM from 'react-dom'

const Header = (course) => {
  return (
    <div>
      <h1>{course.course}</h1>
    </div>
  )
}

const Content = (course) => {
  return( 
    <div>
      <p>{course.parts[0].name} {course.parts[0].exercises}</p>
      <p>{course.parts[1].name} {course.parts[1].exercises}</p>
      <p>{course.parts[2].name} {course.parts[2].exercises}</p>
    </div>
  )
}

const Total = (parts) => {
  return (
  <div>
    <p>Number of exercises {parts.parts[0].exercises + parts.parts[1].exercises + parts.parts[2].exercises}</p>
  </div>
  )
}

const App = (props) => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const {counter} = props

  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    <div>{counter}</div>
  </div>
  )

}

let counter = 1

const refresh = () => {
  ReactDOM.render(
    <App counter={counter} />, 
    document.getElementById('root')
  )
  }

  setInterval(() => {
    refresh()
    counter += 1
  }, 1000)
