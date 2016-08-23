import React, { Component, PropTypes } from 'react';
import ItemTypes from './ItemTypes';
import NavigationNode from './NavigationNode';


export default class NavigationItem extends Component {
  static propTypes = {
    itemType: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    base_item_id: PropTypes.any.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    moveItem: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
  };

  render() {
    const { title, slug, moveItem, base_item_id, index, itemType, children} = this.props;

    let childrenNodes = [];
    if(children){
      {children.map((item, i) => {
        childrenNodes.push(<NavigationNode key={item.base_item_id} itemType={item.itemType} title={item.title}
              slug={item.slug} moveItem={item.moveItem} base_item_id={item.base_item_id} index={item.index}/>)
      })
    }
  }

    return (<NavigationNode itemType={itemType} title={title}
          slug={slug} moveItem={moveItem} base_item_id={base_item_id} index={index}>
          <div>{childrenNodes.map((item, i) => {return item}) }</div>
          </NavigationNode>)
  }
}
