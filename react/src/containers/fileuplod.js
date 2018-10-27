import React, { Component } from 'react';
import LayoutContent from '../components/utility/layoutContent';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import MediaQuery from 'react-responsive';
import Button from '../components/uielements/button';
import Input from '../components/uielements/input';
import Image from '../image/Ranker_company_logo.png';
import FooterImage from  './footerimage';
import { Card } from 'antd';

export default class extends Component {
  render() {
    return (
 
      <LayoutContentWrapper style={{ height: '130vh',background:'#fff' }}>
      <MediaQuery minDeviceWidth={767}>
            <p style={{fontSize:'20px',marginBottom:'3%'}}>EMAIL VALIDATION - UPLOAD YOUR FILE</p> <p style={{marginLeft:'49%'}}>PiyushPatadiya@gmail.com</p>
            </MediaQuery>
            <MediaQuery minDeviceWidth={0}  maxWidth={766}>
            <p style={{fontSize:'18px',marginBottom:'3%',marginLeft:'0%'}}>EMAIL VALIDATION - UPLOAD YOUR FILE</p> <p style={{marginLeft:'22%'}}>PiyushPatadiya@gmail.com</p>
            </MediaQuery>
        <LayoutContent  style={layoutcontent}>
          <MediaQuery minDeviceWidth={767}>
            <div style={maindiv}>
            Let's Get Started By <b>Uploading Your File Here.</b>
            </div>
          </MediaQuery>
      <MediaQuery minDeviceWidth={0}  maxWidth={766}>
            <div style={maindiv_mobile}>
            Let's Get Started By <b>Uploading Your File Here.</b>
            </div>
          </MediaQuery>
          <div style={{height:'5px',width:'60px',backgroundColor:'#323291'}}>
            </div>
           <div style={{marginTop:'3%'}}>
              <p style={pcontent}>Select a <b>CSV or TXT</b> file to upload. Then click on <b>"Validate File."</b> You will be notified via email once your entire list has been validated. You can always check the <b style={{color:'blue'}}><a href="#">Email Validation - Download Your Result"</a></b> page to get the current status.

            <p>Please take a look at our <b  style={{color:'blue'}}><a href="#">accepted file formats</a></b> before uploading a file.</p>
            </p>
             </div>
            
               <div><MediaQuery minDeviceWidth={767}>
               <p style={{textAlign:'right'}}><b>You have <b style={{color:'#323291',fontSize:'20px'}}>100</b> available credits. </b>
               
               
               <MediaQuery minDeviceWidth={767}>
               <Button type="primary" onClick={this.showModal} className="btnFirebase">
              ADD MORE
             </Button>
             </MediaQuery> 
             <MediaQuery minDeviceWidth={0}  maxWidth={766}>
               <Button type="primary" onClick={this.showModal} className="btnFirebase">
              ADD MORE
             </Button>
             </MediaQuery> 


               </p>
               </MediaQuery> 
               <MediaQuery minDeviceWidth={0}  maxWidth={766}>
               <p style={{}}><b style={{marginLeft:'29px'}}>You have <b style={{color:'#323291',fontSize:'20px'}}>100</b> available credits. </b>
               
               
               <MediaQuery minDeviceWidth={767}>
               <Button type="primary" onClick={this.showModal} className="btnFirebase">
              ADD MORE
             </Button>
             </MediaQuery> 
             <MediaQuery minDeviceWidth={0}  maxWidth={766}>
               <Button type="primary" onClick={this.showModal} className="btnFirebase" style={{'margin-left': '66px'}}>
              ADD MORE
             </Button>
             </MediaQuery> 


               </p>
               </MediaQuery> 
                 </div>

                 <MediaQuery minDeviceWidth={767}>
               <div style={card}>
              
               <p style={cardlogin}>Upload a File</p>
                  <div style={{marginTop:'-3%'}}>
                  <MediaQuery minDeviceWidth={0} maxWidth={766}>
               <span style={select_select1}>
               <MediaQuery minDeviceWidth={0} maxWidth={766}>
               <input type="text" value="Darg file hear or click" name="files[]" multiple="multiple" class="UppyDashboard-input" style={inputselect} /> 
               </MediaQuery>
               <MediaQuery minDeviceWidth={0} maxWidth={766}>

               <Button style={buttonselect}>Select</Button>
               </MediaQuery>
               {/* <button style={buttonselect}>select</button>  */}
               <MediaQuery minDeviceWidth={0} maxWidth={766}>
               <input type="file"  style={filecontrol}/>
               </MediaQuery>
               </span>
               </MediaQuery>




                  <MediaQuery minDeviceWidth={767}>
               <span style={select}>
               <MediaQuery minDeviceWidth={767}>
               <input type="text" value="Darg file hear or click" name="files[]" multiple="multiple" class="UppyDashboard-input" style={inputselect_mobile} /> 
               </MediaQuery>
               <MediaQuery minDeviceWidth={767}>
               <Button style={buttonselect_mobile}>Select</Button>
               </MediaQuery>
               {/* <button style={buttonselect}>select</button>  */}
               <MediaQuery minDeviceWidth={767}>
               <input type="file"  style={filecontrol_mobile}/>
               </MediaQuery>
               </span>
               </MediaQuery>
              
               </div>
               
          </div>
          </MediaQuery>
          <MediaQuery minDeviceWidth={0} maxWidth={766}>
               <div style={card_mobile}>
              
               <p style={cardlogin}>Upload a File</p>
                  <div style={{marginTop:'-3%'}}>
                  <MediaQuery minDeviceWidth={0} maxWidth={766}>
               <span style={select_select1}>
               <MediaQuery minDeviceWidth={0} maxWidth={766}>
               <input type="text" value="Darg file hear or click" name="files[]" multiple="multiple" class="UppyDashboard-input" style={inputselect} /> 
               </MediaQuery>
               <MediaQuery minDeviceWidth={0} maxWidth={766}>

               <Button style={buttonselect}>Select</Button>
               </MediaQuery>  
               <MediaQuery minDeviceWidth={0} maxWidth={766}>           
               <input type="file"  style={filecontrol}/>
               </MediaQuery> 
               </span>
               </MediaQuery>




                  <MediaQuery minDeviceWidth={767}>
               <span style={select}>
               <MediaQuery minDeviceWidth={767}>
               <input type="text" value="Darg file hear or click" name="files[]" multiple="multiple" class="UppyDashboard-input" style={inputselect_mobile} /> 
               </MediaQuery>
               <MediaQuery minDeviceWidth={767}>
               <Button style={buttonselect_mobile}>Select</Button>
               </MediaQuery>
               <MediaQuery minDeviceWidth={767}>
               <input type="file"  style={filecontrol_mobile}/>
               </MediaQuery>
               </span>
               </MediaQuery>
              
               </div>
               
          </div>
          </MediaQuery>  
          <Card
     style={{ width: 1000}}>
     <p style={cardlogin}>Upload a File</p>
     <input type="text" value="Darg file hear or click" name="files[]" multiple="multiple" class="UppyDashboard-input" style={inputselect_mobile} /> 

    
  </Card>
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
  //  marginleft:'10%',
   fontSize:'40px',
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
const card = {
      height:'35%',
      width:'100%',
      margin:'10px',
      background:'#fff',
      'border-radius':'12px',
}
const card_mobile = {
  height:'35%',
  width:'117%',
  margin:'10px',
  background:'#fff',
  'border-radius':'12px',
  'margin-left': '-22px'
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
const select_select1 ={
  marginLeft:'0',
 
}
const addmore= {
  background: '#f1c40f',
  padding: '5px',
    width: '125px',
    'font-size': '14px',

    color: '#fff',
    'border-radius': '10px',
    'font-size': '16px',
    'font-weight': 'bold',
   
}
const filecontrol = {
  
  
  top: '-27px',
  padding:'10px 0 px opx opx',
  width: '100%',
  background: 'orange',
  opacity:0,
  'border-width': '1px',
    'border-style':'solid',
    'line-height': '18px',
    'padding': '4px 4px 0 4px',
}
const filecontrol_mobile = {
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
  width:'21%',
  marginLeft:'4px',
padding:'0px 0px 0px 0px',
}


const buttonselect_mobile = {
  background:'#1c262c',
  color:'#fff',
  'border-radius':'2px',
  border:'0px solid black',
  height: '27px',
  width:'7%',
  marginLeft:'4px',
padding:'0px 0px 0px 0px',
}
const inputselect = {
  background:'#1c262c',
  width:'72%',
  color:'#a9a9a9',
  'border-radius':'2px',
  border:'0px solid black',
  height: '27px',
  'margin-left': '6px'
}
const inputselect_mobile = {
  background:'#1c262c',
  width:'25%',
  color:'#a9a9a9',
  'border-radius':'2px',
  border:'0px solid black',
  height: '27px',
  
}
const imagemargin = {
  marginRight:'20px',
}
// const after = {
//   content: '',
//     width: '62px',
//     height: '5px',
//     background: '#f2e82d',
 
//     margintop: '15px'

// }