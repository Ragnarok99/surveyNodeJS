import axios from 'axios'

export const fetchUser = () => {
  return axios.get('/api/current_user')
}

export const addCredits = token => {
  return axios.post('/api/stripe', token)
}