import { useState } from 'react'

const ShowAnecdote = ({ selected, anecdotes }) => {

  return <h1>{anecdotes[selected]}</h1>

}

const ShowVotes = ({ updatedVotes, selected }) => {

  let pluralVotes = updatedVotes[selected] > 1 ? "votes" : "vote"

  if (updatedVotes[selected] === undefined) {
    return <h2>No votes yet</h2>
  } else {
    return <h1>has {updatedVotes[selected]} {pluralVotes}</h1>
  }
}

const ShowMostVoted = ({ updatedVotes, anecdotes }) => {

  let topVoted = 0


  if (updatedVotes === []) {
    return <h2>No top voted yet</h2>
  } else {

    for (let max of updatedVotes) {
      if (max > topVoted) {
        topVoted = max
      }
    }

    const indexMaxVoted = updatedVotes.indexOf(topVoted)

    console.log("ShowMostVoted", updatedVotes[indexMaxVoted], anecdotes[indexMaxVoted])

    return (
      <>
        <h3>{anecdotes[indexMaxVoted]}</h3>
        <p> has {topVoted} votes </p>
      </>
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const updatedSelected = Math.floor(Math.random() * (anecdotes.length - 1).toFixed());

  const [selected, setSelected] = useState(updatedSelected)

  const [votes, setVotes] = useState([])

  const updatedVotes = [...votes]



  const vote = () => {
    if (updatedVotes[selected] === undefined) {
      updatedVotes[selected] = 1
      setVotes(updatedVotes)
      console.log("first vote", updatedVotes)
    } else {
      updatedVotes[selected] += 1
      setVotes(updatedVotes)
      console.log("one more vote", updatedVotes)
    }
  }


  const randomAnecdote = () => {
    setSelected(0)
    setSelected(updatedSelected)
    console.log("second call", updatedSelected)
  }


  return (
    <div>
      <ShowAnecdote selected={selected} anecdotes={anecdotes} />
      <button onClick={vote}>vote</button><button onClick={randomAnecdote}>Generate anecdote!</button>
      <ShowVotes updatedVotes={updatedVotes} selected={selected} />
      <br></br>
      <ShowMostVoted updatedVotes={updatedVotes} anecdotes={anecdotes} />

    </div>
  )
}

export default App