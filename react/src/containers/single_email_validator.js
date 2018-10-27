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
            <p style={{fontSize:'20px',marginBottom:'3%'}}>DOWNLOAD YOUR RESULTS</p> <p style={{marginLeft:'49%'}}>PiyushPatadiya@gmail.com</p>
            </MediaQuery>
            <MediaQuery minDeviceWidth={0}  maxWidth={766}>
            <p style={{fontSize:'20px',marginBottom:'3%',marginLeft:'33px'}}>DOWNLOAD YOUR RESULTS</p> <p style={{marginLeft:'22%'}}>PiyushPatadiya@gmail.com</p>
            </MediaQuery>
        <LayoutContent  style={layoutcontent}>
        <MediaQuery minDeviceWidth={767}>
          <div style={maindiv}>
            Welcome to your <b>Single Email Validator</b>
          </div>
          </MediaQuery>
          <MediaQuery minDeviceWidth={0}  maxWidth={766}>
          <div style={maindiv_mobile}>
            Welcome to your <b>Single Email Validator</b>
          </div>
          </MediaQuery>
          <div style={{height:'5px',width:'60px',backgroundColor:'#323291','margin-top': '10px',   marginleft:'20%',}}>
            </div>
           <div style={{marginTop:'3%'}}>
              <p style={pcontent}>Type in any email address to have it quickly validated or use our bulk email validator to validate large lists with our proven anti-greylist technology to reduce unknowns.

            </p>
             </div>
             <MediaQuery minDeviceWidth={767}>
               <div style={card}>
                <div style={{'padding-top': '16px', 'padding-left': '31px'}}>
             
                  <p style={{fontSize:'20px',padding:'20px,0px,10px,10px'}}><span>EMAIL ADDRESS</span><b style={{textAlign:'right',fontSize:'17px',marginLeft:'28%'}}>You have <b style={{color:'#323291',fontSize:'20px'}}>100</b>&nbsp;available e-mail validation(s).
              </b></p>
             <hr  style={{width:'95%',marginLeft:'-1%'}}/>
             
             <MediaQuery minDeviceWidth={767}>
             <Input type="text" placeholder="Email@Example.com"style={inputstyle}/>
             </MediaQuery>
             <MediaQuery minDeviceWidth={767}>
             <Button type="primary" onClick={this.showModal} className="btnFirebase" style={{height:'54px', 'margin-left': '10px',fontSize:'18px'}}> 
              Validate
             </Button> 
             </MediaQuery>
             </div>


              </div>
              </MediaQuery>
        {/* MediaQuery start hear */}
              <MediaQuery minDeviceWidth={0}  maxWidth={766}>
               <div style={card_mobile}>
                <div style={{'padding-top': '16px', 'padding-left': '31px'}}>
             
                  <p style={{fontSize:'20px',padding:'20px,0px,10px,10px'}}><span>EMAIL ADDRESS</span><b style={{textAlign:'right',fontSize:'17px',marginLeft:'28%'}}>
                  <br/>You have <b style={{color:'#323291',fontSize:'20px'}}>100</b>available e-mail validation(s).
              </b></p>
             <hr  style={{width:'95%',marginLeft:'-1%'}}/>
             
             <MediaQuery minDeviceWidth={0} maxWidth={766}>
             <Input type="text" 
             
             placeholder="Email@Example.com"style={inputstyle_mobile}/>
             </MediaQuery>
            
             </div>
             <MediaQuery minDeviceWidth={0} maxWidth={766}>
             <Button type="primary" onClick={this.showModal} className="btnFirebase" style={{height:'54px', margin:'auto',fontSize:'18px',marginTop:'10px',display: 'block'
}}> 
              Validate
             </Button> 
             </MediaQuery>

              </div>
              </MediaQuery>
<FooterImage></FooterImage>
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
   marginleft:'20%',
   fontSize:'38px',
   'margin-top': '-23px'
  //  text-align: center;
  //   padding-left: 15px;
  //   padding-right: 15px;
  //   font-size: 30px;
}
const maindiv_mobile = {
  textAlign:'left',
  //  marginleft:'10%',
   fontSize:'20px',
}
const pcontent ={
      // background:'pink',
      fontSize:'17px',
      padding:'5px',
      color: '#5a6169',
      'font-family': 'montserrat,sans-serif',
  
      // 'font-weight': 'bold',
    
}
const card = {
      height:'30%',
      width:'100%',
      margin:'10px',
      background:'#fff',
      marginLeft:'-2px',
      'border-radius':'12px',
      marginTop:'5%'
      
}
const card_mobile = {
  height:'40%',
  width:'117%',
  margin:'10px',
  background:'#fff',
  'border-radius':'12px',
  'margin-left': '-22px'
}
const inputstyle = {
    width:'35%',
    height:'55px',
    border:'2px solid blue',
    borderRadius:'5px',
    fontSize:'18px',
    marginLeft:'20%',
    marginTop:'3%'


}
const inputstyle_mobile= {
  width:'92%',
  height:'55px',
  border:'2px solid blue',
  borderRadius:'5px',
  fontSize:'18px',
  marginLeft:'0%',
  marginTop:'3%'
}




