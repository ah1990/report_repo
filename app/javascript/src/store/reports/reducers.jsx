import * as types from './types'

const initialState = {
  reports: null,
  error: null,
}

export default function auth(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    case types.GET_REPORTS_SUCCESS:
      return { ...state, error: null, reports: payload.reports }
    case types.GET_REPORTS_ERROR:
      return { ...state, error: payload.error }
    default:
      return state
  }
}