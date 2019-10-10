import React from 'react'
import PropTypes from 'prop-types'

const AppTemplate = ({ children, ...props }) => {
  return (
    <section {...props}>{children}</section>
  )
}

AppTemplate.propTypes = {
  children: PropTypes.any.isRequired,
}

export default AppTemplate