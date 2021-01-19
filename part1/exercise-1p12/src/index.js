import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.nextAnecdote}>Next anecdote</button>
    </div>
  )
}


const App = (props) => {

  const [selected, setSelected] = useState(0)

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <div>
      <p>{selected}: {props.anecdotes[selected]}</p>
      <p>votes: {props.votes[selected]}</p>
      <Button nextAnecdote={()=>{
        setSelected(getRandom(0, 5))
        }
      }/>
      <button onClick={addVote(selected)}>Vote +1</button>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes}  votes={votes} />,
  document.getElementById('root')
)