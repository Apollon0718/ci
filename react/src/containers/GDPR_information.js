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
      <LayoutContentWrapper style={{ height: '450vh',background:'#fff' }}>
       <MediaQuery minDeviceWidth={767}>
            <p style={{fontSize:'20px',marginBottom:'3%',margin:'auto'}}>ACCOUNT INFO</p> <p style={{margin:'auto'}}>PiyushPatadiya@gmail.com</p>
            </MediaQuery>
            <MediaQuery minDeviceWidth={0}  maxWidth={766}>
            <p style={{fontSize:'18px',marginBottom:'3%',marginLeft:'0%',margin:'auto'}}>ACCOUNT INFO</p> <p style={{margin:'auto'}}>PiyushPatadiya@gmail.com</p>
            </MediaQuery>
        
        
        <LayoutContent  style={layoutcontent}>
      
          <MediaQuery minDeviceWidth={767}>
          <div style={maindiv}>
          <span>GDPR</span><b style={{marginLeft:'10px'}}>Information</b>
          </div>
          </MediaQuery>
          <MediaQuery minDeviceWidth={0}  maxWidth={766}>
          <div style={maindiv_mobile}>
          <span>GDPR </span><b style={{marginLeft:'10px'}}>Information</b>
          </div>
          </MediaQuery>
          <div style={{height:'5px',width:'60px',backgroundColor:'#323291','margin-top': '10px',   marginleft:'20%',}}>
            </div>
           <div style={{marginTop:'3%'}}>
              <p style={pcontent}>To accept the GDPR Policy, please scroll to the bottom and click the "Accept Agreement" button.

            </p>
             </div>
         
               <div style={card}>
                    <div>
                    <MediaQuery minDeviceWidth={0}  maxWidth={766}>
                    <h1 style={{textAlign:'center',fontSize:'1.5rem','line-height': '1.2',color:'#5a6169','font-family': 'montserrat,sans-serif'}}>DATA PROCESSING AGREEMENT</h1>
                    </MediaQuery>

                    <MediaQuery minDeviceWidth={767}>
                    <h1 style={{textAlign:'center',fontSize:'2.5rem','line-height': '1.2',color:'#5a6169','font-family': 'montserrat,sans-serif'}}>DATA PROCESSING AGREEMENT</h1>
                    </MediaQuery>
                      <p style={mainpragrap}>
                    <p style={{fontSize:'18px',paddingLeft:'10px','font-weight': '500'}}><b style={{textAlign:'',fontSize:'17px'}}>BETWEEN:</b><br/></p>
                      <p style={mainpragrap}>
                      The company who will electronically sign this Data Processing Agreement (hereinafter to be referred to as: the <b>“Data Controller”</b>), 
                      </p>
                      <p style={mainpragrap}>
                          AND
                      </p>
                      <p style={mainpragrap}>
                      Hertza, L.L.C., DBA ZeroBounce, a Nevada limited liability company, having its principal place of business at 10 E. Yanonali St., Santa Barbara, California 93101 (hereinafter to be referred to as: the <b>“Data Processor”</b>). 
                        </p>
                        <p style={mainpragrap}>
                        HEREBY AGREE AS FOLLOWS: 
                          </p>
                          <div>
                            <p style={mainpragrap}>
                          <b style={{paddingLeft:'25px'}}> 1. Subject matter of this Data Processing Agreement</b></p>
                           <p style={mainpragrap1}>
                           <b>1.1</b> This Data Processing Agreement applies exclusively to the processing of personal data that is subject to EU Data Protection Law in the scope of the Terms and Conditions of Use Agreement of even date hereof between the parties for the provision of the ZeroBounce services (“Services”) (hereinafter to be referred to as: the “Service Agreement”).
                             </p>
                             <p style={mainpragrap1}>
                           <b>1.2</b>  The term EU Data Protection Law shall mean Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).
                             </p>
                             <p style={mainpragrap1}>
                           <b>1.3</b> Terms such as “Processing”, “Personal Data”, “Data Controller” and “Processor” shall have the meaning ascribed to them in the EU Data Protection Law.
                             </p>
                             <p style={mainpragrap1}>
                           <b>1.4</b>Insofar as the Data Processor will be processing Personal Data subject to EU Data Protection Law on behalf of the Data Controller in the course of the performance of the Service Agreement with the Data Controller the terms of this Data Processing Agreement shall apply. <b>

                           The categories of Personal Data to be processed includes: first name; last name; gender; city; state; country; Internet Protocol (IP) Address information; and email addresses. The types of data subjects who information will be processed are individuals. The purposes for which the personal data will be processed includes: validation of email lists for deliverability; and removal of known email complainers, abusers and spam traps from email address lists.
                           </b>
                             </p>
                             <p style={mainpragrap}>
                          <b style={{paddingLeft:'20px'}}> 2. The Data Controller and the Data Processor</b></p>
                          <p style={mainpragrap1}>
                           <b>2.1</b> The Data Controller will determine the scope, purposes, and manner by which the Personal Data may be accessed or processed by the Data Processor. The Data Processor will process the Personal Data only as set forth in Data Controller’s written instructions.
                             </p>
                             <p style={mainpragrap1}>
                           <b>2.2</b>The Data Processor will only process the Personal Data on documented instructions of the Data Controller in such manner as – and to the extent that – this is appropriate for the provision of the Services, except as required to comply with a legal obligation to which the Data Processor is subject. In such a case, the Data Processor shall inform the Data Controller of that legal obligation before processing, unless that law explicitly prohibits the furnishing of such information to the Data Controller. The Data Processor shall never process the Personal Data in a manner inconsistent with the Data Controller’s documented instructions. The Data Processor shall immediately inform the Data Controller if, in its opinion, an instruction infringes this Regulation or other Union or Member State data protection provisions.
                             </p>
                             <p style={mainpragrap1}>
                           <b>2.3</b>The Parties have entered into a Service Agreement in order to benefit from the expertise of the Processor in securing and processing the Personal Data for the purposes set out in Section 1.4. The Data Processor shall be allowed to exercise its own discretion in the selection and use of such means as it considers necessary to pursue those purposes, subject to the requirements of this Data Processing Agreement.
                             </p>
                             <p style={mainpragrap1}>
                           <b>2.4</b> Data Controller warrants that it has all necessary rights to provide the Personal Data to Data Processor for the Processing to be performed in relation to the Services. To the extent required by Applicable Data Protection Law, Data Controller is responsible for ensuring that any necessary data subject consents to this Processing are obtained, and for ensuring that a record of such consents is maintained. Should such a consent be revoked by the data subject, Data Controller is responsible for communicating the fact of such revocation to the Data Processor, and Data Processor remains responsible for implementing any Data Controller instruction with respect to the further processing of that Personal Data.
                             </p>
                             <p style={mainpragrap}>
                          <b style={{paddingLeft:'20px'}}> 3. Confidentiality</b></p>

                          <p style={mainpragrap1}>
                           <b>3.1</b>Without prejudice to any existing contractual arrangements between the Parties, the Data Processor shall treat all Personal Data as strictly confidential and it shall inform all its employees, agents and/or approved sub-processors engaged in processing the Personal Data of the confidential nature of the Personal Data. The Data Processor shall ensure that all such persons or parties have signed an appropriate confidentiality agreement, are otherwise bound to a duty of confidentiality, or are under an appropriate statutory obligation of confidentiality

                             </p>

                            </div>
                            


                    </p>
                    <Button type="primary" onClick={this.showModal} className="btnFirebase" style={{width:'35%',
    height:'55px',fontSize:'18px',marginTop:'20px',marginLeft:'35%'}}> 
            Accept Agreement
             </Button> 
                  <div style={{height:'50px'}}>
                    </div>
           
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
const pcontent ={
      // background:'pink',
      fontSize:'17px',
      padding:'5px',
      color: '#5a6169',
      'font-family': 'montserrat,sans-serif',
  
      // 'font-weight': 'bold',
    
}
const card = {
      
      margin:'10px',
      background:'#fff',
     width:'100%',
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
const mainpragrap = {
  paddingLeft:'10px',
  fontSize:'20px'
}
const mainpragrap1 = {
  paddingLeft:'50px'
}



