import React, { Component } from 'react';
import LayoutContent from '../components/utility/layoutContent';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import Button from '../components/uielements/button';
import Input from '../components/uielements/input';
import Image1 from '../image/paywithcard.jpg';
import Image2 from '../image/buy-logo-medium.png';
import Image3 from '../image/member-payment-paypal.png';
import Image4 from '../image/member-payment-master.png';
import Image5 from '../image/member-payment-visa.png';
import Image6 from '../image/member-payment-discover.png';
import Image7 from '../image/member-payment-ame.png';
import MediaQuery from 'react-responsive';
import { Icon } from 'antd';
import { InputNumber } from 'antd';

import FooterImage from  './footerimage';
import { borderRadius } from '../settings/style-util';
import { Container, Row, Col } from 'react-grid-system';

function onChange(value) {
  console.log('changed', value);
}

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: '300vh',background:'#fff' }}>        
            <MediaQuery minDeviceWidth={767}>
            <p style={{fontSize:'20px',marginBottom:'3%',margin:'auto'}}>ACCOUNT INFO</p> <p style={{margin:'auto'}}>PiyushPatadiya@gmail.com</p>
            </MediaQuery>
            <MediaQuery minDeviceWidth={0}  maxWidth={766}>
            <p style={{fontSize:'18px',marginBottom:'3%',marginLeft:'0%',margin:'auto'}}>ACCOUNT INFO</p> <p style={{margin:'auto'}}>PiyushPatadiya@gmail.com</p>
            </MediaQuery>
        <LayoutContent  style={layoutcontent}>

        <MediaQuery minDeviceWidth={767}>
            <div style={maindiv}>
            Buy <b>Credits</b>
            </div>
          </MediaQuery>
      <MediaQuery minDeviceWidth={0}  maxWidth={766}>
            <div style={maindiv_mobile}>
            Buy<b>Credits</b>
            </div>
          </MediaQuery>







       

      
          {/* <div style={maindiv}>
          Buy <b>Credits</b>
          </div> */}
          <div style={{height:'5px',width:'60px',backgroundColor:'#323291','margin-top': '10px',   marginleft:'20%',}}>
            </div>
           <div style={{marginTop:'3%'}}>
              <p style={pcontent}>Credits will never EXPIRE.

            </p>
             </div>
         
               <div style={card}>
                <div style={{'padding-top': '16px', 'padding-left': '31px'}}>
             
                  <p style={{fontSize:'18px'}}>You currently have: <b style={{color:'#323291',fontSize:'20px'}}>100</b>&nbsp;credits.
            </p>
            
                        
             <Container>
              <Row>
                <Col sm={5} style={{background:''}}>
                   <table style={customers}>
                              <tr  style={{height:'55px'}}>
                                <th style={th}>NUMBER OF EMAILS</th>
                                <th style={th}>PRICE PER EMAIL</th>
                          
                              </tr>
                              <tr style={{backgroundColor:'#eaebed',height:'55px'}}>
                                  <td style ={tdfont}>5K to 100K</td>
                                  <td style ={tdfont}>$0.007</td>
                                
                                </tr>
                                <tr style={{height:'55px'}}>
                                  <td  style ={tdfont}>100K to 250K</td>
                                  <td  style ={tdfont}>$0.00375</td>
                                
                                </tr>
                                <tr style={{backgroundColor:'#eaebed',height:'55px'}}>
                                  <td  style ={tdfont}>250K to 500K</td>
                                  <td  style ={tdfont}>$0.0026</td>
                                </tr>
                                <tr style={{height:'55px'}}>
                                  <td  style ={tdfont}>500K to 1M</td>
                                  <td  style ={tdfont}>$0.002</td>
                                </tr>
                                <tr style={{backgroundColor:'#eaebed',height:'55px'}}>
                                  <td  style ={tdfont}>1M to 2M</td>
                                  <td  style ={tdfont}>$0.0015</td>
                                </tr>
                                <tr style={{height:'55px'}}>
                                  <td  style ={tdfont}>2M to 5M</td>
                                  <td  style ={tdfont}>$0.00135</td>
                                </tr>
                                <tr style={{backgroundColor:'#eaebed',height:'55px'}}>
                                  <td  style ={tdfont}>5M</td>
                                  <td  style ={tdfont}>$0.00115</td>
                                </tr>
                                <tr style={{height:'55px'}}>
                                  <td  style ={tdfont}>over 5 Million</td>
                                  <td  style ={tdfont}>Call for Pricing</td>
                                </tr>
                              
                               
              </table>
                </Col>
                <Col sm={7}  style={{background:''}}>
                <hr />
                  <Row>
                    <Col>
                   <Input type="text" placeholder="100,000 for $375" style={inputstyle}
                      prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' ,fontSize:'15px'}} />}
                   />
                    </Col>
                    <Col>
                    <Input type="text" placeholder="250,000 for 650" style={inputstyle}
                       prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' ,fontSize:'15px'}} />}
                    />
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                   <Input type="text" placeholder="500,000 for $1000" style={inputstyle} 
                   
                   prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' ,fontSize:'15px'}} />}
               
                   onChange={this.onChangeUserName}
                   ref={node => this.userNameInput = node}
                   />
                  
                    </Col>
                    <Col>
                    <Input type="text" placeholder="1,000 for 1500" style={inputstyle} 
                       prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' ,fontSize:'15px'}} />}
                    />

                    </Col>

                    </Row>

                    <p style={{marginTop:'10px',fontSize:'17px'}}>HOW MANY EMAILS DO YOU WANT TO VALIDATE?</p>
                      <div>
                        <p style={{fontSize:'17px',fontWeight:'bold'}}>Enter Amount:</p>
                        <InputNumber
                        defaultValue={10000}
                        onChange={onChange}
                        style={{width:'30%'}}
                />  </div>
                        
               
                        
                        
                        
                        <div><p style={{fontSize:'25px'}}>Buy <b style={{color:'blue'}}>5,000</b> credits for <b style={{color:'green'}}>$35.00</b></p>
                        
                        <p style={{fontWeight:'bold',fontSize:'18px'}}>BUY NOW WITH</p>
                        </div>
                       <hr />
                        <div>
                        <img alt="#" src={Image1} style={{paddingRight:'10px'}} /><img alt="#" src={Image2} />

                          </div>
                          <div style={{marginTop:'30px'}}>
                          <img alt="#" src={Image3} style={{paddingRight:'10px'}} /><img alt="#" src={Image4} style={{paddingRight:'10px'}} /><img alt="#" src={Image5} style={{paddingRight:'10px'}} /><img alt="#" src={Image6} style={{paddingRight:'10px'}} /><img alt="#" src={Image7} style={{paddingRight:'10px'}} />
                          </div>
                          <div style={{marginTop:'20px'}}>
                            <p style={{fontSize:'17px',fontWeight:'bold'}}>* Pre-paid credit cards are not accepted.</p>
                            </div>
                </Col>
               
              </Row>
            </Container>
            
          
             </div>


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
const tdfont = {
  fontSize: '16px',
  fontWeight:'bold',
  // marginLeft:'10px'
  textAlign:'center'
  
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
    
      width:'100%',
      margin:'10px',
      background:'#fff',
      marginLeft:'-2px',
      'border-radius':'12px',
      marginTop:'5%',
      overflow: 'auto',
      
}

const customers ={
  'font-family': 'Trebuchet MS, Arial, Helvetica, sans-serif',
  'border-collapse': 'collapse',
  border: '1px solid #ddd',
  width: '100%',
  marginLeft:'-20px'

}

const td = {
 
  padding: '8px',
  fontSize:'15px',
  background:'pink',
  
}
 const th = {
  'padding-top': '0px 0px,0px 0px',
  'padding-bottom':'12px',
  'text-align': 'center',
  'background-color': 'black',
  'color': 'white',

  // width:'10%'

}

const inputstyle = {
 
  height:'55px',
  border:'2px solid #c8c8ce',
  borderRadius:'5px',
 fontSize:'18px',
  marginTop:'3%',
  fontWeight:'bold'

}




