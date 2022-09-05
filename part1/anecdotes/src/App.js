import {useState} from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.', 
        'Adding manpower to a late software project makes it later!', 
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
    ]

    const points = Array(anecdotes.length).fill(0) 

    const [selected, setSelected] = useState(0)
    const [vote, setVote] = useState(points)

    const handleVote = () => {
        const newPoints = [...vote]
        newPoints[selected] += 1
        setVote(newPoints)
    }

    const handleRandom = () => {
        const randomAnecdote = Math.floor(Math.random() * anecdotes.length);
        setSelected(randomAnecdote);
    }

    const maxVotes = Math.max(...vote)
    const mostVotedAnecdote = vote.indexOf(maxVotes)

    return (
        <div>
            <h1>Anecdote of the day:</h1>
            <p>{anecdotes[selected]}</p>
            <p>has {vote[selected]} votes</p>
            <button onClick={handleVote}>vote</button>
            <button onClick={handleRandom}>next anecdote</button>
            <h1>Anecdote with the most votes:</h1>
            <p>{anecdotes[mostVotedAnecdote]}</p>
            <p>has {maxVotes} votes</p>
        </div>
    )
}

export default App
