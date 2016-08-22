import React, { Component, PropTypes } from 'react';
import BreadcrumbNode from './BreadcrumbNode'
import SocialShare from './SocialShare'


export default class Breadcrumbs extends Component {

  render(){
    var crumbsLength = this.props.crumbs.length;
    var lastIndex = crumbsLength-1;
      return (<div className="breadcrumbs">
      <div className="wrapper">
          <nav className="crumbs">
              {this.props.crumbs.map(function(crumbItem, i) {
                return (
                    <BreadcrumbNode key = {i} name={crumbItem.name} url={crumbItem.url} last={ i == lastIndex } />
                );
              }
            )
          }
        </nav>
        <SocialShare crumb={this.props.crumbs[lastIndex]} ></SocialShare>
    </div>
</div>)


  }
}
