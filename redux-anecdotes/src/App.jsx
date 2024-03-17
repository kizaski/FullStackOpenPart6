import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import anecdoteService from './services/anecdotes'
import { useEffect } from 'react'
import { setAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService.getAll().then(notes => dispatch(setAnecdotes(notes)))
  }, [dispatch])

  return (
    <div>
      <Notification />

      <h2>Anecdotes</h2>

      <Filter />

      <AnecdoteList />
      <AnecdoteForm />

    </div>
  )
}

export default App