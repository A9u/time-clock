import React from 'react';
import { Form, Grid, Header, Image, Segment } from 'semantic-ui-react';
import logo from '../images/logo.png';
import '../css/login.css';
import backgroundImage from '../images/login-bg.jpg';

const LoginForm = () => (
  <div className='login-form' style = {{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
    <Grid textAlign='center' verticalAlign='middle' className='height-100'>
      <Grid.Column className="max-width-450">
        <Header as='h2' textAlign='center'>
          <Image src={logo} /> Josh Software
        </Header>
        <Segment>
          <Form size="large">
            <Form.Group inline widths="equal">
              <Form.Input fluid focus iconPosition='left' placeholder='Email' icon='user' />
            </Form.Group>
            <Form.Group inline widths="equal">
              <Form.Input fluid placeholder='Password' type="password" icon='lock' iconPosition='left' />
            </Form.Group>
            <Form.Button fluid primary content='Login' size='large' />
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginForm
