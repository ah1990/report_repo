import camelCase from 'lodash/camelCase'
import { combineReducers } from 'redux'
import auth from './auth/reducers'
import reports from './reports/reducers'


const reducers = {
  auth,
  reports
}

// const req = require.context('.', true, /\.\/.+\/reducers\.js$/)
//
// req.keys().forEach(key => {
//   const storeName = camelCase(key.replace(/\.\/(.+)\/.+$/, '$1'))
//   reducers[storeName] = req(key).default
// })

export default combineReducers(reducers)