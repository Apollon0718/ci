import React, { Component } from 'react';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import LayoutContent from '../components/utility/layoutContent';

export default class extends Component {
  render() {
    alert(1);
        
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <h1>ISOMORPHIC DASHBOARD HOME</h1>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
