import * as actions from './actions'
import api from '../../utils/api'

export const getReports = () => async (dispatch, getState) => {
  try {
    const response = await api.request(
      `/api/v1/reports`,
    {
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.auth_token
      }
    }
    )
    dispatch(actions.getReportsSuccess(response))
  } catch (err) {
    const { message } = await err.json()
    dispatch(actions.getReportsError(message))
  }
}