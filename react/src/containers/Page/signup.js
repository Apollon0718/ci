import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../../components/uielements/input';
import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
import authAction from '../../redux/auth/actions';
import IntlMessages from '../../components/utility/intlMessages';
import SignInStyleWrapper from './signup.style';
import { join } from 'redux-saga/effects';

const { login } = authAction;

class SignIn extends Component {

  state = {
    redirectToReferrer: false
  };
  componentWillReceiveProps(nextProps) {
    if (
      this.props.isLoggedIn !== nextProps.isLoggedIn &&
      nextProps.isLoggedIn === true
    ) {
      this.setState({ redirectToReferrer: true });
    }
  }
  handleSignup = () => {
    const { login } = this.props;
    login();
    this.props.history.push('/dashboard');
  };
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      confirmpassword: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = (e) => {
    // const {firstname,lastname,password,confirmpassword} = this.state;
    // alert(this.state.firstname)
    const { username, password } = this.state;
    let formData = new FormData();
    formData.append('firstname', this.state.firstname);
    formData.append('lastname', this.state.lastname);
    formData.append('username', this.state.username);
    formData.append('email', this.state.email);
    formData.append('password', this.state.password);
    formData.append('confirmpassword', this.state.confirmpassword);


    fetch('http://localhost/emailverifier/registration/doregister', {
      method: 'POST',
      body: formData
    }).then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);

        // if(responseJson == "Please fill required fields")
        // {
        //   this.setState({ Error: responseJson });
        // }
        // else if(responseJson == "Email already exist"){

        //       this.setState({ Error: responseJson });
        // }
        // else if(responseJson == "Mismatch in password")
        // {
        //   this.setState({ Error: responseJson });
        // }
        // else {
        //   this.props.history.push('/signin');
        // }
          
         
      
     
        if(responseJson == "Please fill required fields"){
          
          this.setState({Error: responseJson});
        }
        else{
          this.props.history.push('/signin');
          // this.setState({Error: responseJson});
          // alert(1)
        }

      })
  }
  render() {



    const from = { pathname: '/dashboard' };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }


    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.signUpTitle" />
              </Link>
            </div>

            <div className="isoSignInForm">
              <div className="isoInputWrapper isoLeftRightComponent">
                <Input size="large" placeholder="First name" name="firstname" value={this.state.firstname}
                  onChange={this.handleChange}
                  required />



                <Input size="large" placeholder="Last name" name="lastname" value={this.state.lastname}
                  onChange={this.handleChange}
                  required />

              </div>

              <div className="isoInputWrapper">
                <Input size="large" type="text" placeholder="User name" name="username" value={this.state.username}
                  onChange={this.handleChange}
                  required />
              </div>

              <div className="isoInputWrapper">
                <Input size="large" type="text" placeholder="Email" name="email" value={this.state.email}
                  onChange={this.handleChange}
                  required />

              </div>

              <div className="isoInputWrapper">
                <Input size="large" type="password" placeholder="Password" name="password" value={this.state.password}
                  onChange={this.handleChange}
                  required />

              </div>

              <div className="isoInputWrapper">
                <Input size="large" type="password" placeholder="Confirm Password" name="confirmpassword" value={this.state.confirmpassword}
                  onChange={this.handleChange}
                  required />

              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox>
                  <IntlMessages id="page.signUpTermsConditions" />
                </Checkbox>

              </div>
              <div style={{ color: 'red', textAlign: 'left' }}>
                {this.state.Error}
              </div>

              <div className="isoInputWrapper">
                <Button type="primary" className="sugnupBtn" onClick={this.handleClick}>
                  <IntlMessages id="page.signUpButton" />
                </Button>
              </div>

              <div className="isoCenterComponent isoHelperWrapper">

                <Link to="/signin">
                  <IntlMessages id="page.signUpAlreadyAccount" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

export default connect(
  state => ({
    isLoggedIn: state.Auth.idToken !== null ? true : false
  }),
  { login }
)(SignIn);
