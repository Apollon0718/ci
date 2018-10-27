import React, { Component } from 'react';
import LayoutContent from '../components/utility/layoutContent';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import Button from '../components/uielements/button';
import Input from '../components/uielements/input';
import Image from '../image/Ranker_company_logo.png';
import FooterImage from  './footerimage';
import Collapse from './collapse';
import MediaQuery from 'react-responsive';
import { DatePicker } from 'antd';

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: '130vh',background:'#fff' }}>
      
       <MediaQuery minDeviceWidth={767}>
            <p style={{fontSize:'20px',marginBottom:'2%',textAlign:'center',marginLeft:'25px'}}>API KEYS & INFO</p> <p style={{marginLeft:'49%'}}>PiyushPatadiya@gmail.com</p>
            </MediaQuery>
            <MediaQuery minDeviceWidth={0}  maxWidth={766}>
            <p style={{fontSize:'20px',marginBottom:'2%',textAlign:'center',marginLeft:'25px'}}>API KEYS & INFO</p> <p style={{marginLeft:'49%'}}>PiyushPatadiya@gmail.com</p>
            </MediaQuery>
        <LayoutContent  style={layoutcontent}>
        <MediaQuery minDeviceWidth={767}>  
          <div style={maindiv}>
          Everything you need in one place <b>to get started using the API.</b>
          </div>
          </MediaQuery>
          <MediaQuery minDeviceWidth={0}  maxWidth={766}>
          <div style={maindiv_mobile}>
          Everything you need in one place <b>to get started using the API.</b>
          </div>
          </MediaQuery>
          <div style={{height:'5px',width:'60px',backgroundColor:'#323291'}}>
         
             </div>
             <div style={Collapsestyle}>
         <Collapse></Collapse>
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
  marginTop:'3%'
}

