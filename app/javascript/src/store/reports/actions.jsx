import * as types from './types'

export const getReportsSuccess = (reports) => ({
  type: types.GET_REPORTS_SUCCESS,
  payload: { reports },
})

export const getReportsError = (error) => ({
  type: types.GET_REPORTS_ERROR,
  payload: {error},
})