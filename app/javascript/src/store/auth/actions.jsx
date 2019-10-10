import * as types from './types'

export const signInSuccess = (auth_token) => ({
  type: types.SIGN_IN_SUCCESS,
  payload: { auth_token },
})

export const signInRedirect = () => ({
  type: types.SIGN_IN_REDIRECT,
  payload: {},
})
export const signInError = error => ({
  type: types.SIGN_IN_ERROR,
  payload: { error },
})
export const checkAuth = () => ({
  type: types.CHECK_AUTH,
  payload: {},
})