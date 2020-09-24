import React from 'react';
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
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}
/*************************************************************************************************** */


const App = () => {
  return(
    <div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <App1 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
