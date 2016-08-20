import React, { Component, PropTypes } from 'react';

export default class BreadcrumbNode extends Component {
  render(){

      if(this.props.last !== true){
        return (<div>
          <a href={ this.props.url }>{ this.props.name }</a><span>"&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;"</span>
        </div>)
      }else {
        return (<span className="last">{ this.props.name }</span>)
      }

  }
}
