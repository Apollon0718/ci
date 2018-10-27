import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../../components/uielements/input';
import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
import authAction from '../../redux/auth/actions';
import IntlMessages from '../../components/utility/intlMessages';
import SignInStyleWrapper from './signin.style';
import Recaptcha from 'react-recaptcha';

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
  // handleLogin = () => {
  //   const { login } = this.props;
  //   login();
  //   this.props.history.push('/dashboard');
  // };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isVerified: false
      // usernameError:'Please enter username',
      // passwordError:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.recaptchaLoaded= this.recaptchaLoaded.bind(this);
  }
  recaptchaLoaded(){
    
    console.log("capta success");
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = () => {
    // alert(this.state.username)
    // alert(this.state.password)
      if(this.state.isVerified){
        // alert('you have successfully subscribed');
        fetch('http://localhost/emailverifier/login/dologin?username=' + this.state.username + '&password=' + this.state.password, {
          method: "GET"
        })
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson);
            // const isValid = this.validate();
               
            if (typeof responseJson === "object") {
              // this.props.history.isLoggedIn=true;
              this.props.history.push('/dashboard');
            }
            else {
              this.setState({Error:responseJson});
              // this.setState({
              //   username: '',
              //   password: ''
              // })
              // alert("wrong username or password");
            }
    
          })
    
      }
      else{
         alert('Please verify that you are a human');
      }
   
    // alert(1)
    // const { login } = this.props;
    // login();
    // this.props.history.push('/dashboard');
  };
  verifyCallback(response){
    if(response){
       this.setState({
          isVerified: true
       })
    }
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
                <IntlMessages id="page.signInTitle" />
              </Link>
            </div>

            <div className="isoSignInForm">
              <div className="isoInputWrapper">
                <Input size="large"  type="text" placeholder="Username" name="username" onChange={this.handleChange}  
                   />
                {/* <span class="validity"></span> */}
                   {/* <div style={{color:'red'}}>{this.state.usernameError}</div> */}
              </div>
             

              <div className="isoInputWrapper">
                <Input size="large" type="password" name="password" placeholder="Password" onChange={this.handleChange}  
                          />
               
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox>
                  <IntlMessages id="page.signInRememberMe" />
                </Checkbox>
                <Button type="primary" onClick={this.handleLogin}>
                  <IntlMessages id="page.signInButton" />
                </Button>
               
                </div>
                 <div style={{color:'red',textAlign:'left'}}>
                {this.state.Error}
               </div>
  
              <Recaptcha 
                sitekey="6LcBsHQUAAAAANuRmoFsGe4O5DIdfyWB5xIneItg"
                 render="explicit" 
                 onloadCallback={this.recaptchaLoaded} 
                 verifyCallback={this.verifyCallback}
                />


              {/* <p className="isoHelperText">
                <IntlMessages id="page.signInPreview" />
              </p> */}
              <div className="isoCenterComponent isoHelperWrapper">
                <Link to="" className="isoForgotPass">
                  <IntlMessages id="page.signInForgotPass" />
                </Link>
                <Link to="/signup">
                  <IntlMessages id="page.signInCreateAccount" />
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
    // isLoggedIn: true
  }),
  { login }
)(SignIn);
