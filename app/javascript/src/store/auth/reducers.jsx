import * as types from './types'

const initialState = {
  isLoggedIn: localStorage.isLoggedIn || false,
  jwt: localStorage.jwt || null,
  error: null,
  user: null,
}

export default function auth(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    case types.SIGN_IN_SUCCESS:
      return { ...state, isLoggedIn: true, error: null, user: payload.auth_token }
    case types.SIGN_IN_ERROR:
      return { ...state, error: payload.error }
    default:
      return state
  }
}