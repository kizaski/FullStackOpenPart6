import { useSelector, useDispatch } from 'react-redux'
import { voteUp } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const filter = useSelector(state => state.filter)
  const filteredAnecdotes = useSelector(state => {
    console.log(state)
    return state.anecdotes.filter(an => an.content.toLowerCase().includes(filter))
  })
  const anecdotes = useSelector(state => state.anecdotes)

  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteUp(id))
    // dispatch({ type: 'anecdotes/voteUp', payload: id })
    const votedAnecdote = anecdotes.find(an => an.id === id)
    dispatch(notificationChange(`voted ${votedAnecdote.content}`))
    // dispatch(setNotification(`you voted '${votedAnecdote.content}'`, 10))
  }

  return (
    <div>
      {filteredAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList