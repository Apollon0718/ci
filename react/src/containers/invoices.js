import React, { Component } from 'react';
import LayoutContent from '../components/utility/layoutContent';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import Button from '../components/uielements/button';
import Input from '../components/uielements/input';
import Image from '../image/Ranker_company_logo.png';
import FooterImage from  './footerimage';
import { borderRadius } from '../settings/style-util';
import MediaQuery from 'react-responsive';
import { Icon } from 'antd';
import { Table, Divider, Tag } from 'antd';
import { Card } from 'antd';
import { Form, Checkbox } from 'antd';
function onChange(value) {
	console.log('changed', value);
  }
const FormItem = Form.Item;

const columns = [{
  title: 'INVOICE #',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: '	NAME',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'PAYMENT DATE',
  dataIndex: 'address',
  key: 'address',
},
{
  title: 'ITEM PURCHASED',
  dataIndex: 'address',
  key: 'address',
},

{
  title: 'AMOUNT',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <span>
      {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
  ),
}, {
  title: 'VIEW DETAILS',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Invite {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
  ),
}];



export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: '140vh',background:'#fff' }}>
        <MediaQuery minDeviceWidth={767}>
            <p style={{fontSize:'20px',marginBottom:'3%',margin:'auto'}}>ACCOUNT INFO</p> <p style={{margin:'auto'}}>PiyushPatadiya@gmail.com</p>
            </MediaQuery>
            <MediaQuery minDeviceWidth={0}  maxWidth={766}>
            <p style={{fontSize:'18px',marginBottom:'3%',marginLeft:'0%',margin:'auto'}}>ACCOUNT INFO</p> <p style={{margin:'auto'}}>PiyushPatadiya@gmail.com</p>
            </MediaQuery>
        
        
        <LayoutContent  style={layoutcontent}>
          <MediaQuery minDeviceWidth={767}>
          <div style={maindiv}>
          <span>Invoice</span><b style={{marginLeft:'10px'}}>History</b>
          </div>
          </MediaQuery>
          <MediaQuery minDeviceWidth={0}  maxWidth={766}>
          <div style={maindiv_mobile}>
          <span>Invoice </span><b style={{marginLeft:'10px'}}>History</b>
          </div>
          </MediaQuery>






          <div style={{height:'5px',width:'60px',backgroundColor:'#323291','margin-top': '10px',   marginleft:'20%',}}>
            </div>
           <div style={{marginTop:'3%'}}>
              <p style={pcontent}>Welcome to your invoice history, here you can download copies of all your invoices. </p>
             <p style={pcontent}>If you have a VAT/EIN Number or a business name please enter it below, so we can add it to your invoices.

</p>
             </div>
         
             <Card style={{ width: '100%' }}>
			<Form onSubmit={this.handleSubmit} className="login-form" style={{textAlign:'center'}}>
				   <FormItem>
		   
				   
					   <Input size="large" prefix={<Icon type="reconciliation" style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="VAT/EIN #" />
					   
				   </FormItem>
				   <FormItem>
		   
					   <Input  size="large" prefix={<Icon type="gitlab" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Bill To" />
				  
				   </FormItem>
				 
				   <FormItem>
         
					
					 <Button type="primary"  className="login-form-button" style={{width:'100%',height:'50px',fontSize:'16px'}}>
					 Save 
					 </Button>
				 
				   </FormItem>
				 </Form>
		   
         <Table columns={columns} />
					   
					 </Card>
        
             <div style={{marginTop:'10px'}}>
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
  fontWeight:'bold'
  
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
      marginLeft:'-2px',
      'border-radius':'12px',
      marginTop:'5%'
      
}
const inputstyle = {
 
    height:'55px',
    border:'2px solid blue',
    borderRadius:'5px',
 
    marginLeft:'10px',
    marginTop:'3%'


}
const inputstyle1 = {
 
  height:'55px',
  border:'2px solid blue',
  borderRadius:'5px',
  width:'100%',
  marginLeft:'10px',
  marginTop:'3%'


}
const inputstylebtn = {
 
  height:'55px',

  borderRadius:'5px',
  width:'100%',
  marginLeft:'10px',
  marginTop:'3%'


}
const customers ={
  'font-family': 'Trebuchet MS, Arial, Helvetica, sans-serif',
  'border-collapse': 'collapse',
  border: '1px solid #ddd',

  marginTop:'10px',
  overflow:'auto'


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



