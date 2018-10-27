
import React, { Component } from 'react';
import LayoutContent from '../components/utility/layoutContent';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import Button from '../components/uielements/button';
import Input from '../components/uielements/input';
import Image from '../image/Ranker_company_logo.png';
export default class extends Component {
    render() {
      return (
<div>
<div style={{marginLeft:'15%',paddingLeft:'50px'}}><img alt="#" src={Image}  style={imagemargin}/> <img alt="#" src={Image}style={imagemargin} /> <img alt="#" src={Image} style={imagemargin}/> <img alt="#" src={Image} style={imagemargin}/></div>
   <p><a href ="#">Privacy Policy  Terms</a></p>

   </div>
      );
    }
  }
  const imagemargin = {
    marginRight:'20px',
  }