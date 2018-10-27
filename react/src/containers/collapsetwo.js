import React, { Component } from 'react';
import { Collapse } from 'antd';
import CollapsePanel from 'antd/lib/collapse/CollapsePanel';
import LayoutContent from '../components/utility/layoutContent';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import Button from '../components/uielements/button';
import Input from '../components/uielements/input';
import Image from '../image/Ranker_company_logo.png';
import FooterImage from  './footerimage';
const Panel = Collapse.Panel;

const text1 = `
If you choose to disable this feature all your downloads from ZeroBounce will no longer be password protected. If your account is compromised, your data will be at risk. We strongly recommend keeping this option enabled. To disable this feature, you will receive an email with a link to confirm. Once you confirm, the feature will be disabled. You can re-enable it at anytime.
`


;
// const text2 =`
// If you choose to enable this feature your account will be more secure requiring you to use two-factor authentication when you log in.

// `;

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
        <Panel header="Password Protected Downloads" style={{fontSize:'15px'}} key="1">
            

          <p>{text1}</p>
         
        </Panel>
        {/* <Panel header="Two-Factor Authentication" key="2">
          <p>{text2}</p>
        </Panel>
    */}
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
  const pcontent ={
        // background:'pink',
        fontSize:'16px',
        padding:'5px',
      
  }
  const card = {
        height:'35%',
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
    textAlign:'center',
    marginLeft:'20%',
    marginTop:'3%'


}