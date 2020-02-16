import React, { Component } from 'react'

import {Link} from 'react-router-dom';

export default class ShowCase extends Component {

  render() {
    return (
      <div className='showcase'>
        <h4> {this.props.name} </h4>
        <Link to={this.props.name}><img src={this.props.image}/></Link>
      </div>
    )
  }
}
