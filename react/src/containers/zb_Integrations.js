import React, { Component } from 'react';
import LayoutContent from '../components/utility/layoutContent';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import Button from '../components/uielements/button';
import Input from '../components/uielements/input';
// import Modal from '../components/utility/Modal';
import MediaQuery from 'react-responsive';
import { Card } from 'antd';

import Image from '../image/4619559.jpg';
import FooterImage from  './footerimage';
import Collapse from './collapse';
export default class extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <LayoutContentWrapper style={{ height: '130vh',background:'#fff' }}>     
            <MediaQuery minDeviceWidth={767}>
            <p style={{fontSize:'20px',marginBottom:'3%',margin:'auto'}}>API KEYS & INFO</p> <p style={{margin:'auto'}}>PiyushPatadiya@gmail.com</p>
            </MediaQuery>
            <MediaQuery minDeviceWidth={0}  maxWidth={766}>
            <p style={{fontSize:'18px',marginBottom:'3%',marginLeft:'0%',margin:'auto'}}>API KEYS & INFO</p> <p style={{margin:'auto'}}>PiyushPatadiya@gmail.com</p>
            </MediaQuery>
        <LayoutContent  style={layoutcontent}> 
        <MediaQuery minDeviceWidth={767}>
            <div style={maindiv}>
            We offers the following options to <b>integrate with</b>
            </div>
          </MediaQuery>
      <MediaQuery minDeviceWidth={0}  maxWidth={766}>
            <div style={maindiv_mobile}>
            We offers the following options to<b>integrate with</b>
            </div>
          </MediaQuery>
          <div style={{height:'5px',width:'60px',backgroundColor:'#323291'}}></div>
          {/* <div style={card}> */}
          {/* <div style={{height:'30px',width:'80px',backgroundColor:'green',color:'#fff',fontWeight:'bold',marginLeft:'20px', padding:'0px 0px 0px 0px',textAlign:'center',paddingTop:'5px'}}>
          official
          </div>
          <div style={{marginLeft:'38%'}}>
          <img alt="#" src={Image} />
          <p style={{fontSize:'18px'}}><b>MaillChimp</b></p>
            </div>
            <hr/>
            <p style={{fontSize:'17px',color:'#71a1d5',textAlign:'center',fontWeight:'bold'}}>Connect</p> */}
          {/* </div> */}
          <Card
     style={{ margin:'auto'}}>
 <div style={{height:'30px',width:'80px',backgroundColor:'green',color:'#fff',fontWeight:'bold', padding:'0px 0px 0px 0px',textAlign:'center',paddingTop:'5px'}}>
          official
          </div>
          <div style={{textAlign:'center'}}>
          <img alt="#" src={Image} />
          <p style={{fontSize:'18px'}}><b>MaillChimp</b></p>
            </div>
            <hr/>
            <p style={{fontSize:'17px',color:'#71a1d5',textAlign:'center',fontWeight:'bold'}}>Connect</p>

    
               </Card>
         
         <div style={{marginTop:'50px'}}>
        <FooterImage></FooterImage>
        </div>
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
   marginleft:'10%',
   fontSize:'40px',
   'margin-top': '-23px'
   
}
const pcontent ={
      // background:'pink',
      fontSize:'16px',
      padding:'5px',
    
}
const Collapsestyle = {
  marginTop:'3%'
}

const card = {
  height:'35%',
  width:'40%',
  marginLeft:'290px',
  background:'#fff',
  'border-radius':'9px',
}