import React from 'react'
import {
  List,
  Header,
  Container,
  Segment,
  Table,
  Button,
  Grid,
  Form
} from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../../../store/auth/operations'
import { Redirect } from 'react-router-dom'

class LoginPage extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.error) {
      setTimeout(() => nextProps.clearError(), 1000)
    }
    return prevState
  }

  state = {
    email: '',
    password: '',
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { email, password } = this.state
    this.props.signIn(email, password)
  }

  render() {
    return this.props.isLoggedIn ? (
      <Redirect to="/" />
    ) : (
      <>
        <Grid
          textAlign="center"
          style={{ height: '80vh' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="black" textAlign="center">
              {' '}
              Sign in
            </Header>
            <Form onSubmit={this.handleSubmit} size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="mail@example.com"
                  name="email"
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                />

                <Button color="black" fluid size="large">
                  Sign in
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </>
    )

  }
}

const mapStateToProps = ({ auth }) => {
  return {
    isLoggedIn: auth.isLoggedIn,
  }
}

const mapDispatchToProps = {
  signIn
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage))