import React, { Component } from 'react';
import LayoutContent from '../components/utility/layoutContent';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import Button from '../components/uielements/button';
import Input from '../components/uielements/input';
import Image from '../image/Ranker_company_logo.png';
import FooterImage from  './footerimage';
import { borderRadius } from '../settings/style-util';
import MediaQuery from 'react-responsive';

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: '130vh',background:'#fff' }}>
            <MediaQuery minDeviceWidth={767}>
            <p style={{fontSize:'20px',marginBottom:'3%',margin:'auto'}}>ACCOUNT INFO</p> <p style={{margin:'auto'}}>PiyushPatadiya@gmail.com</p>
            </MediaQuery>
            <MediaQuery minDeviceWidth={0}  maxWidth={766}>
            <p style={{fontSize:'18px',marginBottom:'3%',marginLeft:'0%',margin:'auto'}}>ACCOUNT INFO</p> <p style={{margin:'auto'}}>PiyushPatadiya@gmail.com</p>
            </MediaQuery>
        
        
        <LayoutContent  style={layoutcontent}>
         <MediaQuery minDeviceWidth={767}>
            <div style={maindiv}>
            Auto<b>Pay</b>
            </div>
          </MediaQuery>
      <MediaQuery minDeviceWidth={0}  maxWidth={766}>
            <div style={maindiv_mobile}>
            Auto<b>Pay</b>
            </div>
          </MediaQuery>


          <div style={{height:'5px',width:'60px',backgroundColor:'#323291','margin-top': '10px',   marginleft:'20%',}}>
            </div><MediaQuery minDeviceWidth={0}  maxWidth={766}>
           <div style={{marginTop:'3%'}}>
              <p style={pcontent}>To access this feature, you have to make a purchase using the "Pay with Card" option in blue, on the <b style={{color:'blue'}}>Buy Credits</b> screen.
               This feature is currently not available through PayPal.<br/>
              However, we do plan to support PayPal in the future.

            </p>
             </div>
             </MediaQuery>

             <MediaQuery minDeviceWidth={767}>
           <div style={{marginTop:'3%'}}>
              <p style={pcontent_mobile}>To access this feature, you have to make a purchase using the "Pay with Card" option in blue, on the <b style={{color:'blue'}}>Buy Credits</b> screen.
               This feature is currently not available through PayPal.<br/>
              However, we do plan to support PayPal in the future.

            </p>
             </div>
             </MediaQuery>
               <div style={card}>
               
             

             <Button type="primary" onClick={this.showModal} className="btnFirebase" style={{height:'65px',fontSize:'18px',width:'100%',borderRadius:'10px'}}> 
              Buy Credit
             </Button> 
             </div>


        
        
             
<FooterImage></FooterImage>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
const maindiv_mobile = {
  textAlign:'left',
  //  marginleft:'10%',
   fontSize:'20px',
}
const layoutcontent  = {
  background:'#ededf3',
}
const maindiv = {
  textAlign:'left',
   marginleft:'20%',
   fontSize:'38px',
   'margin-top': '-23px'
  //  text-align: center;
  //   padding-left: 15px;
  //   padding-right: 15px;
  //   font-size: 30px;
}
const pcontent ={
      // background:'pink',
      fontSize:'16px',
      padding:'5px',
      color: '#5a6169',
      'font-family': 'montserrat,sans-serif',
  
      // 'font-weight': 'bold',
    
}
const pcontent_mobile = {
  fontSize:'20px',
  padding:'5px',
  color: '#5a6169',
  'font-family': 'montserrat,sans-serif',
}
const card = {
      height:'12%',
      width:'100%',
      margin:'10px',     
       background:'#fff',
      marginLeft:'-2px',
      'border-radius':'12px',
      marginTop:'5%'
      
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





