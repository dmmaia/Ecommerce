import React, { Component } from 'react'

import banner from '../../img/ecommerce-banner.png';
import '../style.css';
import ShowCase from './showcase';
import {Smartphone0} from '../PImages'
import {Computer0} from '../PImages'
import {Tshirt0} from '../PImages'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col} from 'react-bootstrap';


export default class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      //showcaseMain:[{productname:['smartphone','computer']},{productimage:[Smartphone0,Computer0]}]
    }
  }
    render(){
      return (
        <div className="contentMain">
          <img src={banner}/>
          <div className='show'>
          <Container>
            <Row>
            <Col><ShowCase name={'Smartphones'} image={Smartphone0}/></Col>
            <Col><ShowCase name={'Computers'} image={Computer0}/></Col>
            <Col><ShowCase name={'T-Shirts'} image={Tshirt0}/></Col>
            </Row>
          </Container>
          </div>
        </div>
      )
    }
}
