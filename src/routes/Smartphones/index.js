import React, { Component } from 'react'

import Product from '../Product';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col} from 'react-bootstrap';

import {Smartphone0} from '../PImages'

export default class Smartphones extends Component {
  render() {
    return (
      <div className='content'>
        <Container>
          <Row>
            <Col><Product name={'Smartphone Samsung Galaxy A10 SM-A105M 32GB'} image={Smartphone0} price={'750,00'}/></Col>
          </Row>
        </Container>
      </div>
    )
  }
}
