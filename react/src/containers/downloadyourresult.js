import React, { Component } from 'react';
import LayoutContent from '../components/utility/layoutContent';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import Button from '../components/uielements/button';
import Input from '../components/uielements/input';
import Image from '../image/Ranker_company_logo.png';
import FooterImage from  './footerimage';
import './style.css';
import MediaQuery from 'react-responsive';
import { Card } from 'antd';
import { Table, Icon } from 'antd';
const data = [{
 
}];
export default class extends Component {
  state = {
    searchText: '',
  };

  handleSearch = (selectedKeys, confirm) => () => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  }

  handleReset = clearFilters => () => {
    clearFilters();
    this.setState({ searchText: '' });
  }
  render() {
    const columns = [{
      title: 'FILENAME',
      dataIndex: 'name',
      key: 'name',
     
    
      render: (text) => {
        const { searchText } = this.state;
        return searchText ? (
          <span style={{fontSize:'10px'}}>
            {text.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((fragment, i) => (
              fragment.toLowerCase() === searchText.toLowerCase()
                ? <span key={i} className="highlight">{fragment}</span> : fragment // eslint-disable-line
            ))}
          </span>
        ) : text;
      },
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, 
    {
      title: 'status',
      dataIndex: 'age',
      key: 'age',
    }, 
    {
      title: 'UPLOAD DATE',
      dataIndex: 'age',
      key: 'age',
    }, 
    {
      title: 'TOTAL',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'VALID',
      dataIndex: 'age',
      key: 'age',
    }, 
    {
      title: 'INVALID',
      dataIndex: 'age',
      key: 'age',
    }, 
    {
      title: 'CATCH-ALL',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'SPAMTRAP',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'ABUSE',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'DO NOT MAIL',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'UNKNOWN',
      dataIndex: 'age',
      key: 'age',
  
    },
    {
      title: 'DELETE',
      dataIndex: 'age',
      key: 'age',
    }
  ];
    return (
      <MediaQuery minDeviceWidth={336}>

      <LayoutContentWrapper style={{ height: '130vh',background:'#fff' }}>
      <MediaQuery minDeviceWidth={767}>
            <p style={{fontSize:'20px',marginBottom:'3%',margin:'auto'}}>DOWNLOAD YOUR RESULTS</p> <p style={{margin:'auto'}}>PiyushPatadiya@gmail.com</p>
            </MediaQuery>
            <MediaQuery minDeviceWidth={0}  maxWidth={766}>
            <p style={{fontSize:'20px',marginBottom:'3%',margin:'auto'}}>DOWNLOAD YOUR RESULTS</p> <p style={{margin:'auto'}}>PiyushPatadiya@gmail.com</p>
            </MediaQuery>

        <LayoutContent  style={layoutcontent}>
        <MediaQuery minDeviceWidth={767}>
          <div style={maindiv}>
          Welcome To Your<b style={{'margin-left':'10px'}}>Email Validation Results</b>
          </div>
          </MediaQuery>
          <MediaQuery minDeviceWidth={0}  maxWidth={766}>
          <div style={maindiv_mobile}>
          Welcome To Your &nbsp;<b>Email Validation Results</b>
          </div>
          </MediaQuery>
          <div style={{height:'5px',width:'60px',backgroundColor:'#323291'}}>
            </div>
           <div style={{marginTop:'3%'}}>
              <p style={pcontent}>To download the results of an e-mail list simply click on the File Name, but not before Zerobounce finishes the validation, and the download options will appear. We recommend only sending to the emails with a valid result. If you want to send to any other status, please read to status code documentation linked below before you make that decision.

            <p style={{marginTop:'2%'}}>Please take a look at our <b  style={{color:'blue'}}><a href="#"> status codes &nbsp;</a></b>to understand your results.</p>
            </p>
             </div>
             <div>
             <Card>
                 <Table columns={columns} dataSource={data}  
                 />
                 <p><b>* All files older than 30 days will be automatically deleted.</b></p>
           </Card>
        </div>
              
        

<FooterImage></FooterImage>
        </LayoutContent>
      </LayoutContentWrapper>
      </MediaQuery>

    );
  }
}

const layoutcontent  = {
  background:'#ededf3',
  overflow:'auto'
}
const maindiv = {
  textAlign:'left',
   marginleft:'15%',
   fontSize:'40px',
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
      color: '#87929d',
      'font-family': 'montserrat,sans-serif',
      'font-weight': 'bold',
    
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
     textAlign:'center',
     marginleft:'50%',
    'padding-top':'52px',
    'padding-bottom': '10px'
}

const customers ={
  'font-family': 'Trebuchet MS, Arial, Helvetica, sans-serif',
  'border-collapse': 'collapse',
  border: '1px solid #ddd',
  // width: '100%',

}

const td = {
  border: '1px solid #ddd',
  padding: '8px'
}
// #customers td, #customers th {
 
//   padding: 8px;
// }

// #customers tr:nth-child(even){background-color: #f2f2f2;}

// #customers tr:hover {background-color: #ddd;}

 const th = {
  'padding-top': '0px 0px,0px 0px',
  'padding-bottom':'12px',
  'text-align': 'center',
  'background-color': 'black',
  'color': 'white',
  border: '1px solid #ddd',
  width:'3%'

}




