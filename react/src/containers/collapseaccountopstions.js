import React, { Component } from 'react';
import { Collapse } from 'antd';
import CollapsePanel from 'antd/lib/collapse/CollapsePanel';
import LayoutContent from '../components/utility/layoutContent';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import Button from '../components/uielements/button';
import Input from '../components/uielements/input';
import Image from '../image/Ranker_company_logo.png';
import FooterImage from  './footerimage';
import { Container, Row, Col } from 'react-grid-system';
import MediaQuery from 'react-responsive';
import Select from 'react-select';
import moment from 'moment';
import { Card } from 'antd';
import { Form, Icon, Checkbox } from 'antd';
import { InputNumber } from 'antd';
function onChange(value) {
	console.log('changed', value);
  }
const FormItem = Form.Item;

const options = [
	{ value: 'chocolate', label: 'Retail' },
	{ value: 'strawberry', label: 'Softwar/Hardwar' },
	{ value: 'vanilla', label: 'Goverment' },
	{value:'unknown',label:'Other'}
   ];
   const options1 = [
	{ value: 'chocolate', label: '(GMT-12:00) International Date Line West' },
	{ value: 'strawberry', label: '(GMT-11:00) Samoa' },
	{ value: 'vanilla', label: '(GMT-09:00) Alaska' }
  ];
const Panel = Collapse.Panel;

const text1 = `
Keeping your profile current, helps us better serve your needs. Click the configure button above to update your profile.
`;
// const text2 =`

// Changing your email address also changes your login ID. Once your email is changed you will receive an email at your current email address with a validation link that you must click for the change to take effect. REMEMBER: your new email will become your current login.

// `;
const text3 =`
Changing your ZeroBounce password to a secure password that only you know and that no one else can guess protects your private information from unauthorized access.

A password with 8 or more characters, including numbers, both uppercase and lowercase letters, and special symbols is recommended but not required.
A password of 6 characters or more is required.
`;
const text4 =`ZeroBounce has the ability to send out email notifications to keep you up to date about different events and useful information.
We understand that some notifications are important to some customers, but might not be important to you.`;
const text5 =`Change Time Zone`;
const text6 =`text6`;
// const text7 =`If you choose to disable this feature all your downloads from ZeroBounce will no longer be password protected. If your account is compromised, your data will be at risk. We strongly recommend keeping this option enabled. To disable this feature, you will receive an email with a link to confirm. Once you confirm, the feature will be disabled. You can re-enable it at anytime.`;
// const text8 =`If you choose to enable this feature your account will be more secure requiring you to use two-factor authentication when you log in.`;
function callback(key) {
    console.log('assdf',key);
  }
  

export default class extends Component {
	


	
	constructor (props) {
		super(props)
		this.state = {
		  startDate: moment(),
		  users: []
		};
		this.handleChange = this.handleChange.bind(this);
	   }
	  
	   handleChange(date) {
		this.setState({
		  startDate: date
		});
	   }
	   state = {
		selectedOption: null,
	   }
	   handleChange = (selectedOption) => {
		this.setState({ selectedOption });
		console.log(`Option selected:`, selectedOption);
	   }


	   handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
		  if (!err) {
			console.log('Received values of form: ', values);
		  }
		});
	  }

	  componentDidMount() {
		this.loadUserDataById();
	  }

	  loadUserDataById() {

		fetch('http://localhost/emailverifier/login/dologin?username=grabitjustnow' + '&password=' + 'prime264', {
          method: "GET"
        })
		  .then(response => response.json())
		  .then(response => {
			this.setState({ users: response.data })
			console.log('adsadsadsad',response)
		  });
	  }


	   
    render() {
	 const {  } = this.props;	
	 const { selectedOption } = this.state;
	 const data = this.state.users;

      return (
		 <div >
        <Collapse defaultActiveKey={['1']} onChange={callback}>
       <Panel header="Update Your Profile" key="1" >
	  		<p>{text1}</p>
	  <Card style={{ width: '100%' }}>
	 		 <Form onSubmit={this.handleSubmit} className="login-form" style={{textAlign:'center'}}>
		
				 <FormItem>
		   				 <Input size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="First Name" />{data.firstname}
				 </FormItem>
				 <FormItem>
		   				<Input  size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Last Name" />
				 </FormItem>
				 <FormItem>
		   				<Input  size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Title" />
				</FormItem>
				<FormItem>
		   				<Input  size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Phone Number" />
				</FormItem>
				<FormItem>
						<Select value={selectedOption} onChange={this.handleChange} options={options}/>					
				</FormItem>
				<FormItem>
		   				<Input  size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Company Website" />
				</FormItem>
	
				{/* <FormItem>
		   				<Input  size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Company Website" />
				</FormItem> */}
				{/* <FormItem>
						<Select value={selectedOption} onChange={this.handleChange} options={options}/>					
				</FormItem> */}
				 <FormItem>
				    	<Button type="primary"  className="login-form-button">Change Email</Button>
				 
				 </FormItem>
			 </Form>
		   
		</Card>
	</Panel>
        {/* <Panel header="Change Your Email" key="2"  style={{overflow:'auto'}}>
          <p>{text2}</p>
			<Card style={{ width: '100%' }}>
			<Form onSubmit={this.handleSubmit} className="login-form" style={{textAlign:'center'}}>
				   <FormItem>
		   
				   
					   <Input size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="New Email" />
					   
				   </FormItem>
				   <FormItem>
		   
					   <Input  size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Verify New Email" />
				  
				   </FormItem>
				 
				   <FormItem>
				 
					
					 <Button type="primary"  className="login-form-button">
					 Change Email
					 </Button>
				 
				   </FormItem>
				 </Form>
		   
		   
					   
					 </Card>


        </Panel> */}
        <Panel header="Change Your Password" key="3">
          <p>{text3}</p>
	
		<Card style={{ width: '100%' }}>
			


 <Form onSubmit={this.handleSubmit} className="login-form" style={{textAlign:'center'}}>
        <FormItem>

		
            <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="Old Password" />
			
        </FormItem>
        <FormItem>

            <Input  size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="New Password" />
       
        </FormItem>
		<FormItem>
         
		 <Input size="large"  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="(Verify) New Password"  />
	
	 </FormItem>
        <FormItem>
      
         
          <Button type="primary"  className="login-form-button">
          Change Password
          </Button>
      
        </FormItem>
      </Form>


			
  		</Card>
 


	

        </Panel>
        <Panel header="Change Notification Settings" key="4">
			
		<Card style={{ width: '100%' }}>
			


			<Form onSubmit={this.handleSubmit} className="login-form" style={{textAlign:'center'}}>
				
				   <FormItem>
				   	<table style={{margin:'auto'}}>	<tr>
						   <th><input type="checkbox"/></th>
						   <th style={{textAlign:'left'}}>Notify me when my email list is ready to be downloaded.</th>
						   </tr>
						   <tr>
						   <th><input type="checkbox"/></th>
						   <th>Notify me 7 day before my uploaded files are going to be deleted.</th>
						   </tr>
						   <tr>
						   <th><input type="checkbox"/></th>
						   <th>Notify me 2 day before my uploaded files are going to be deleted.</th>
						   </tr>
						   <tr>
						   <th><input type="checkbox"/></th>
						   <th>Notify me when my credit balance is under   <InputNumber
                        defaultValue={10000}
                        onChange={onChange}
                        style={{}}
                /> credits</th>
						   </tr>
						   
					   </table>
				 
					 <Button type="primary"  className="login-form-button">
					 Save Changes
					 </Button>
				 
				   </FormItem>
				 </Form>
		   
		   
					   
					 </Card>

        </Panel>
	   <Panel header="Delete Your Account" key="6">
	   <MediaQuery minDeviceWidth={767}>
	   <div style={{fontSize:'20px'}}>
		   <p>Deleting your account will:</p>
           <p><i class="ion-android-mail"  style={{marginRight:'10px'}}></i>Delete all your Email Validations
		<span style={{paddingLeft:'40px'}}> <i class="ion-android-person-add" style={{marginRight:'10px'}}></i>Remove your access to the Members Area</span>	
			 	<p style={{marginTop:'10px'}}>If you want to create another account on zerobounce.net in the future, you will be able to do so with the same email address.</p>
			</p>
             </div>
			 </MediaQuery>
			 <MediaQuery minDeviceWidth={0}  maxWidth={766}>
			 <div style={{fontSize:'19px'}}>
		   <p>Deleting your account will:</p>
           <p style={{fontSize:'14px'}}><i class="ion-android-mail"  style={{marginRight:'10px'}}></i>Delete all your Email Validations
		<span style={{}}> <i class="ion-android-person-add" style={{marginRight:'10px'}}></i>Remove your access to the Members Area</span>	
			 	<p style={{marginTop:'10px'}}>If you want to create another account on zerobounce.net in the future, you will be able to do so with the same email address.</p>
			</p>
             </div>
			 </MediaQuery>
			 <MediaQuery minDeviceWidth={767}>
		<div style={card3}>
		<div style={{'padding-top': '62px'}}>
				<p style={{fontSize:'16px',color:'grey',textAlign:'center'}}>Type <b>"DELETE"</b> in all caps and click the Delete Account button</p>
				<Input type="text" placeholder="Email@Example.com"style={inputstyle1}/>
				<MediaQuery minDeviceWidth={767}>

				<Button type="primary" onClick={this.showModal} className="btnFirebase" style={{height:'54px', 'margin-left': '10px',fontSize:'18px',}}> 
				Delete Account
				</Button>
				</MediaQuery>
				</div> 
		</div>
		</MediaQuery>
		<MediaQuery minDeviceWidth={0}  maxWidth={766}>
		<div style={card3}>
		<div style={{}}>
				<p style={{fontSize:'16px',color:'grey',textAlign:'center'}}>Type <b>"DELETE"</b> in all caps and click the Delete Account button</p>
				<Input type="text" placeholder="Email@Example.com"style={inputstyle1_moblie}/>
				<MediaQuery minDeviceWidth={0}  maxWidth={766}>
				<Button type="primary" onClick={this.showModal} className="btnFirebase" style={{height:'54px',fontSize:'18px',marginTop:'10px',margin:'23px'}}> 
				Delete Account
				</Button>
				</MediaQuery>
				</div> 
		</div>
		</MediaQuery>
        </Panel>
	   {/* <Panel header="Password Protected Downloads" key="7">
          <p>{text7}</p>
		

        </Panel>
	   <Panel header="Two-Factor Authentication" key="8">
          <p>{text8}</p>
        </Panel> */}

      </Collapse>
	 </div>
      );
    }
  }
  const layoutcontent  = {
    background:'#ededf3',
  }

  const ptext = {
		fontSize:'15px',
		'font-weight': '520',
	
		
 }
  const inputstyle = {
  
    height:'60px',
    border:'2px solid #eeeff0',
	borderRadius:'10px',

    // 'margin-left': '65px',
  
	color:'#acb0b4',
	// marginTop:'76px'
   

}
const inputstylechangeemail = {
	
    height:'60px',
    border:'2px solid #eeeff0',
	borderRadius:'10px',
    // 'margin-left': '65px',
    fontSize:'18px',
	color:'#acb0b4',
	marginTop:'10px'
}
const inputstyle3 = {
    // width:'65%',
    height:'60px',
    border:'2px solid #eeeff0',
	borderRadius:'10px',
	marginleft:'-12px',
    // 'margin-left': '65px',
    fontSize:'18px',
	color:'#acb0b4',
	// marginTop:'76px'
   

}

const inputstyle1_moblie = {
    height:'60px',
    border:'2px solid #eeeff0',
	borderRadius:'10px',
	// marginleft:'-12px',

    fontSize:'18px',
	color:'#acb0b4',


}
 const textcol ={
	textAlign:'right',
	'padding':'10px 0px 0px 0px',
	color: '#5a6169',
	'font-family': 'montserrat,sans-serif',
	'font-weight': '520'
}
const selectstyle = {
	width:'62%',
	textAlign:'center',
	 marginTop:'20px',
	 'padding-top':'21px',
   
   }



   const maindiv = {
	textAlign:'left',
	 marginleft:'10%',
	 fontSize:'40px',
   }
   const pcontent ={
	    // background:'pink',
	    fontSize:'16px',
	    padding:'5px',
	  
   }
   const card = {
	    height:'50%',
	    width:'100%',
	    margin:'10px',
	    overflow:'auto',
	    background:'#fff',
		'border-radius':'12px',
		paddingButtom:'50px'
   }
   const card1 = {
	height:'55%',
	width:'100%',
	margin:'10px',
	background:'#fff',
	'border-radius':'12px',
}
const card2 = {
	height:'38%',
	width:'100%',
	margin:'10px',
	background:'#fff',
	'border-radius':'12px',
}
const card3 = {
	height:'30%',


	background:'#fff',
	'border-radius':'12px',
}
   const cardlogin = {
	fontSize:'30px',
	'vertical-align': 'text-top',
	  'font-weight': 'bold',
	  'font-size': '30px',
	 textAlign:'center',
	 marginleft:'50%',
	  'padding-top':'52px',
	  'padding-bottom': '10px'
   }
   const button ={
	'border-color': '#35434b',
	  'color':'#e2e8eb',
	  'background-color': '#1c262c',
	  'background-image':'linear-gradient(#30414b,#1c262c)',
	  font:'normal 13px "Segoe UI",Arial,Helvetica,sans-serif',
   }
   const select ={
	  marginLeft:'35%',
	 
   }
   const addmore= {
	background: '#f1c40f',
	padding: '5px',
	  width: '125px',
	  'font-size': '14px',
   
	  // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$main-hover',endColorstr='#f2b011',GradientType=1 );
	  color: '#fff',
	  // padding: '18px 35px',
	  'border-radius': '10px',
	  'font-size': '16px',
	  'font-weight': 'bold',
	 
   }
   const filecontrol = {
	position: 'relative',
	left: '-31%',
	padding:'10px 0 px opx opx',
	width: '310px',
	background: 'orange',
	opacity:0,
	'border-width': '1px',
	  'border-style':'solid',
	  'line-height': '18px',
	  'padding': '4px 4px 0 4px',
	  'box-sizing': 'content-box'
   }
   const buttonselect= {
	background:'#1c262c',
	color:'#fff',
	'border-radius':'2px',
	border:'0px solid black',
	height: '27px',
	width:'7%',
	marginLeft:'4px',
   textAlign:'center',
   padding:'0px 0px 0px 0px',
   }
   const inputselect = {
	background:'#1c262c',width:'23%',color:'#a9a9a9','border-radius':'2px',border:'0px solid black',height: '27px',
   
    
   }
   const imagemargin = {
	marginRight:'20px',
   }
 
   const inputstyle1 = {
	width:'35%',
	height:'55px',
	border:'2px solid #71a1d5',
	borderRadius:'5px',
	fontSize:'16px',
	marginLeft:'25%',

 
 
 }