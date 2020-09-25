import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

/*************************************************************************************************** */
const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>Hello {name}, you are {age} years old. So, you were probably born in {bornYear()}</p>
    </div>
  )
}
const App1 = () => {
  const name = 'Peter'
  const age = 10
  return (
    <div>
    <hr />
      <h1>OLD:</h1>
      <p><strong>Greetings</strong></p>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}
/*************************************************************************************************** */


const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>
      <div>{counter}</div>
      <App1 />
    </div>
    
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
