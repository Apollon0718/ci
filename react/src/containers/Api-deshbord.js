import React, { Component } from 'react';
import LayoutContent from '../components/utility/layoutContent';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import Button from '../components/uielements/button';
import Input from '../components/uielements/input';
import MediaQuery from 'react-responsive';
import { Radio } from 'antd';
import { Chart, Axis, Series, Tooltip, Cursor, Line } from "react-charts";
import { DatePicker } from 'antd';

import moment from 'moment';
import { Container, Row, Col } from 'react-grid-system';
 
import 'react-datepicker/dist/react-datepicker.css';
// import Radio from '../components/uielements/Radio';
import Select from 'react-select';

import Image from '../image/Ranker_company_logo.png';
import FooterImage from  './footerimage';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const RadioGroup = Radio.Group;
function onChange(date, dateString) {
  console.log(date, dateString);
}

const options = [
  { value: 'chocolate', label: 'Status code' },
  { value: 'strawberry', label: 'Invalids by Sub-Status' },
  { value: 'vanilla', label: 'Do Not Mail by Sub-Status' },
  {value:'unknown',label:'Unknown by Sub-Status'}
];
export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;
    return (
      
      <LayoutContentWrapper style={{ height: '130vh',background:'#fff' }}>
       
            <MediaQuery minDeviceWidth={767}>
            <p style={{fontSize:'20px',marginBottom:'3%',margin:'auto'}}>API Dashboard</p> <p style={{margin:'auto'}}>PiyushPatadiya@gmail.com</p>
            </MediaQuery>
            <MediaQuery minDeviceWidth={0}  maxWidth={766}>
            <p style={{fontSize:'18px',marginBottom:'3%',marginLeft:'0%',margin:'auto'}}>API Dashboard</p> <p style={{margin:'auto'}}>PiyushPatadiya@gmail.com</p>
            </MediaQuery>
        <LayoutContent  style={layoutcontent}>
        <MediaQuery minDeviceWidth={767}>
          <div style={maindiv}>
          <span>Detailed information of your</span><b style={{marginLeft:'10px'}}>API Usage</b>
          </div>
          </MediaQuery>
          <MediaQuery minDeviceWidth={0}  maxWidth={766}>
          <div style={maindiv_mobile}>
          <span>Detailed information of your</span><b style={{marginLeft:'10px'}}>API Usage</b>
          </div>
          </MediaQuery>
          <div style={{height:'5px',width:'60px',backgroundColor:'#323291'}}>
            </div>
          
               <div style={card}>
               <div style={selectstyle}>
                <Select 
                      value={selectedOption}
                      onChange={this.handleChange}
                      options={options}
                    />
                 </div>
                 <hr  style={{width:'95%',marginTop:'10px'}}/>
                 <div style={{textAlign:'center',fontWeight:'bold'}}>
              <RadioGroup name="radiogroup" defaultValue={1}>
              <Radio value={1}>Daily </Radio>
              <Radio value={2}>Monthly</Radio>
            </RadioGroup>
            </div>
            <div style={{textAlign:'center',top:'10px'}}>
                <RangePicker onChange={onChange} style={{marginTop:'20px'}}/>
                <Button type="primary" onClick={this.showModal} className="btnFirebase" style={{marginLeft:'10px'}}> See Usage </Button>    

            </div>
                
 </div>
                    
        
              
             
<FooterImage></FooterImage>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
const layoutcontent  = {
  background:'#ededf3',
}
const maindiv = {
  textAlign:'left',
   marginleft:'15%',
   fontSize:'40px',
   'margin-top': '-23px'
}
const pcontent ={
      // background:'pink',
      fontSize:'17px',
      padding:'5px',
      color: '#87929d',
      'font-family': 'montserrat,sans-serif',
      'font-weight': 'bold',
    
}
const maindiv_mobile = {
  textAlign:'left',
  //  marginleft:'10%',
   fontSize:'20px',
}

const card = {
      height:'35%',
      width:'100%',
      margin:'10px',
      background:'#fff',
      'border-radius':'12px',
      marginTop:'5%'
}
const selectstyle = {
  width:'50%',
  margin:'auto',
paddingTop:'25px'


}




