import React, {Component, PropTypes} from 'react'
import {DragSource, DropTarget} from 'react-dnd'
import NavigationTree from './NavigationTree'
import ItemTypes from './ItemTypes';

const source = {
	beginDrag(props) {
		return {base_item_id: props.base_item_id, parent: props.parent, items: props.item.items}
	},

	isDragging(props, monitor) {
		return props.base_item_id == monitor.getItem().base_item_id
	},

	endDrag(props, monitor, component) {
		if (!monitor.didDrop()) {
			return;
		}
	}

}

const target = {
	canDrop() {
		return false
	},

	hover(props, monitor) {
		const {base_item_id: draggedId} = monitor.getItem()
		const {base_item_id: overId} = props

		if (draggedId == overId || draggedId == props.parent)
			return
		if (!monitor.isOver({shallow: true}))
			return
		try{
				props.move(draggedId, overId, props.parent, 'tree')
		}catch(e){
			
		}

	}
}

@DropTarget(ItemTypes.NAVNODE, target, connect => ({
  connectDropTarget: connect.dropTarget()
}))
@DragSource(ItemTypes.NAVNODE, source, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
}))
export default class NavigationItem extends Component {
	static propTypes = {
		base_item_id: PropTypes.any.isRequired,
		parent: PropTypes.any,
		item: PropTypes.object,
		move: PropTypes.func,
		find: PropTypes.func
	};

	getItemLink(){
		return  `/navigation/item/${this.props.base_item_id}`
	}

	render() {
		const {
			connectDropTarget,
			connectDragPreview,
			connectDragSource,
			item: {
				base_item_id,
				title,
				items,
				itemType,
				slug
			},
			parent,
			move,
			find
		} = this.props

		return connectDropTarget(connectDragPreview(
			<div>
				{connectDragSource(
					<div className='nav-item' style={{
						background: 'white',
						border: '2px solid #0abf5a',
						padding: '1em',
            marginBottom: -1
					}}><a href={this.getItemLink()}>{title}</a></div>
				)}
          <NavigationTree parent={this.props.base_item_id} items={items} move={move} find={find}/>
			</div>
		))
	}
}
