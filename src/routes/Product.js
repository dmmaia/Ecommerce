import React, { Component} from 'react'

import './style.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

export default class Product extends Component {
  render() {
    return (
      <div className='showcase'>
        <p>{this.props.name}</p>
        <img src={this.props.image} />
        <p>R${this.props.price}</p>
        <Link to={'/'}><Button variant="primary">Comprar</Button></Link>
      </div>
    )
  }
}
