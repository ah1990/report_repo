import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkAuth } from '../store/auth/operations'

export default function requireAuth(C) {
  class Authentication extends Component {
    componentDidMount() {
      this.props.checkAuth()
    }

    render() {
      const { isLoggedIn } = this.props

      if (!isLoggedIn) {
        return <p>Проверяем авторизацию...</p>
      }

      return <C {...this.props} />
    }
  }

  const mapStateToProps = ({ auth }) => ({
    isLoggedIn: auth.isLoggedIn,
  })

  return connect(mapStateToProps, { checkAuth })(Authentication)
}
