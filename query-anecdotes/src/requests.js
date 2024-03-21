import axios from 'axios'

export const getAnecdotes = () =>
  axios.get('http://localhost:3001/notes').then(res => res.data)