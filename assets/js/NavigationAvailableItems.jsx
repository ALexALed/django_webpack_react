import React, { Component, PropTypes } from 'react'
import { DropTarget } from 'react-dnd'
import NavigationItem from './NavigationItem'
import ItemTypes from './ItemTypes';

const target = {
  drop(props, monitor, component) {
    const {base_item_id: draggedId, parent, items} = monitor.getItem()
    props.move(draggedId, props.base_item_id, props.parent, 'available', true)
  }
}

@DropTarget(ItemTypes.NAVNODE, target, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget()
}))
export default class NavigationAvailableItems extends Component {
  static propTypes = {
    items  : PropTypes.array.isRequired,
    move   : PropTypes.func.isRequired,
    find   : PropTypes.func.isRequired
  };

  render() {
    const {connectDropTarget, items, parent, move, find} = this.props

    return connectDropTarget(
      <div style={{
        position: 'relative',
        minHeight: 10,
        paddingTop: 10,
        marginTop: -11,
        marginLeft: '2em'
      }}>
        {items.map((item, i) => {
          return <NavigationItem
            key={item.base_item_id}
            base_item_id={item.base_item_id}
            parent="available"
            item={{
              base_item_id: item.base_item_id,
      				title: item.title,
      				items: [],
      				slug: item.slug }}
            move={move}
            find={find}
          />
        })}
      </div>
    )
  }
}
