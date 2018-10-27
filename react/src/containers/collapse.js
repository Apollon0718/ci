import React, { Component } from 'react';
import { Collapse } from 'antd';
import CollapsePanel from 'antd/lib/collapse/CollapsePanel';
import LayoutContent from '../components/utility/layoutContent';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import Button from '../components/uielements/button';
import Input from '../components/uielements/input';
import Image from '../image/Ranker_company_logo.png';
import FooterImage from  './footerimage';
import MediaQuery from 'react-responsive';
import { Card } from 'antd';
const Panel = Collapse.Panel;

const text1 = `
Your API Key is required to use our API. Keep it safe and secure. You can view and change it at any time. Click the configure button above to get started.
`


;
const text2 =`
Looking to validate emails via our API? Click the documentation button above to help you get started. Be sure to check out all the easy to use API Wrappers to speed up the development process.

`;
const text3 =`
Looking to get your credit balance via our  API? Click the documentation button above to help you get started. Be sure to check out all the easy to use API Wrappers to speed up the development process.

`;
function callback(key) {
    console.log(key);
  }
export default class extends Component {
  constructor(props) {
    super(props);
    
    this.state = { value: 'Select an Option'};
  }
  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }
    render() {
      const {  } = this.props;
      return (
        <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="Your API Key" style={{fontSize:'15px'}} key="1">
            

          <p>{text1}</p>
          
      
           
           <MediaQuery minDeviceWidth={767}>
           <Card
     style={{ }}>
               {/* <div style={card}> */}
               <MediaQuery minDeviceWidth={767}>
                      <div style={{paddingLeft:'20px',fontSize:'18px',paddingTop:'10px'}}>
                        <p>This is your API KEY - You should <b style={{color:'red'}}>NEVER SHARE IT WITH OTHERS.</b></p>
                      
                      </div>
                      </MediaQuery> 
                      <hr  style={{width:'95%',marginLeft:'2%'}}/>
                      <MediaQuery minDeviceWidth={767}>
                      <Input type="text" placeholder="fc1daadfe4eb49caa593fc65e2f16789"style={inputstyle}/>
                      </MediaQuery>
                      <MediaQuery minDeviceWidth={767}>
                    <Button type="primary" onClick={this.showModal} className="btnFirebase" style={{height:'54px', 'margin-left': '10px',fontSize:'18px'}}> 
                    Generate NEW API KEY
                    </Button>
                    </MediaQuery> 
             {/* </div> */}
             </Card>
             </MediaQuery> 
             <MediaQuery minDeviceWidth={0}  maxWidth={766}>
             <Card
     style={{ }}>
               {/* <div style={card_mobile}> */}
               <MediaQuery minDeviceWidth={0}  maxWidth={766}>
                      <div style={{fontSize:'19px',paddingTop:'10px'}}>
                        <p>This is your API KEY - You should <b style={{color:'red'}}>NEVER SHARE IT WITH OTHERS.</b></p>
                      
                      </div>
                      </MediaQuery> 
                      <hr  style={{width:'95%',marginLeft:'2%'}}/>
                      <MediaQuery minDeviceWidth={0}  maxWidth={766}>
                      <Input type="text" placeholder="fc1daadfe4eb49caa593fc65e2f16789"style={inputstyle_mobile}/>
                      </MediaQuery> 
                      <div style={{marginTop:'10px'}}>
                      <MediaQuery minDeviceWidth={0}  maxWidth={766}>
                      <Button type="primary"  className="login-form-button" style={{marginLeft:'-18px'}}>
					 Generate NEW API KEY
					 </Button>
                    {/* <Button type="primary" onClick={this.showModal} className="btnFirebase" style={{height:'54px',fontSize:'15px',marginTop:'10px',margin:'auto',
    display:'block'}}> 
                    Generate NEW API KEY
                    </Button>  */}
                    </MediaQuery> 
                   
                    {/* </div> */}
             </div>
             </Card>
             </MediaQuery>
    
        </Panel>
        <Panel header="API - Validate Emails Documentation" key="2">
          <p>{text2}</p>
        </Panel>
        <Panel header="API - Get Credits Documentation" key="3">
          <p>{text3}</p>
        </Panel>
      </Collapse>
      
      
      );
    }
  }
  const layoutcontent  = {
    background:'#ededf3',
  }
  const maindiv = {
    textAlign:'left',
     marginleft:'10%',
     fontSize:'40px',
  }
  const card_mobile = {
    height:'60%',
    width:'121%',
    margin:'10px',
    background:'#fff',
    'border-radius':'12px',
    'margin-left': '-22px'
  }
  const pcontent ={
        // background:'pink',
        fontSize:'16px',
        padding:'5px',
      
  }
  const card = {
        height:'40%',
        width:'100%',
        margin:'10px',
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

  const inputstyle = {
    width:'35%',
    height:'55px',
    border:'2px solid blue',
    borderRadius:'5px',
   // marginLeft:'20%',
    // margin:'auto',
    marginLeft:'135px',
    marginTop:'3%'


}
const inputstyle_mobile = {
  // width:'89%',
  height:'55px',
  border:'2px solid blue',
  borderRadius:'5px',
 
  // marginLeft:'5%',
  marginTop:'3%'
}