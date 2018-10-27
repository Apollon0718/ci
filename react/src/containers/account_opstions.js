import React, { Component } from 'react';
import LayoutContent from '../components/utility/layoutContent';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import Button from '../components/uielements/button';
import Input from '../components/uielements/input';
import Image from '../image/Ranker_company_logo.png';
import FooterImage from  './footerimage';
import Collapse from './collapseaccountopstions';
import Collapsetwo from './collapsetwo';
import MediaQuery from 'react-responsive';
export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: '130vh',background:'#fff' }}>
            <p style={{fontSize:'20px',marginBottom:'2%',textAlign:'center',marginLeft:'25px'}}>ACCOUNT INFO</p> <p style={{marginLeft:'49%'}}>PiyushPatadiya@gmail.com</p>
        <LayoutContent  style={layoutcontent}>  
          
        <MediaQuery minDeviceWidth={767}>
          <div style={maindiv}>
          <span> offers the following options to </span><b style={{marginLeft:'10px'}}>customize your account.</b>
          </div>
          </MediaQuery>
          <MediaQuery minDeviceWidth={0}  maxWidth={766}>
          <div style={maindiv_mobile}>
          <span> offers the following options to</span><b style={{marginLeft:'10px'}}>customize your account.</b>
          </div>
          </MediaQuery>
          <div style={{height:'5px',width:'60px',backgroundColor:'#323291'}}>
         
             </div>
             <div style={Collapsestyle}>
         <Collapse></Collapse>
         </div>
         <div style={{marginTop:'30px'}}>
           <Collapsetwo></Collapsetwo>
           </div>
         <div style={{marginTop:'30px'}}>
        <FooterImage></FooterImage>
        </div>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
const layoutcontent  = {
  background:'#ededf3',
  overflow:'auto'
}
const maindiv = {
  textAlign:'left',
   marginleft:'10%',
   fontSize:'39px',
   'margin-top': '-23px'
   
}
const maindiv_mobile = {
  textAlign:'left',
  //  marginleft:'10%',
   fontSize:'20px',
}
const pcontent ={
      // background:'pink',
      fontSize:'16px',
      padding:'5px',
    
}
const Collapsestyle = {
  marginTop:'3%',
  overflow:'auto'
}

