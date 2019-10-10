import * as actions from './actions'
import api from '../../utils/api'

export const checkAuth = () => async (dispatch, getState) => {
  dispatch(actions.checkAuth())
  if (getState().auth.isLoggedIn) return
  dispatch(actions.signInRedirect())
  window.location = window.location.origin + '/login'
}

export const signIn = (email, password) => async (dispatch, getState) => {
  try {
    const response = await api.request(
      `/api/v1/login`,
      {method: 'POST', body: JSON.stringify({email, password})}
      )
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('auth_token', response.auth_token)
    dispatch(actions.signInSuccess(response.auth_token))
  } catch (err) {
    const { message } = await err.json()
    dispatch(actions.signInError(message))
  }
}