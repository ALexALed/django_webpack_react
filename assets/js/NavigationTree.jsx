import React, {Component, PropTypes} from 'react'
import {DropTarget} from 'react-dnd'
import NavigationItem from './NavigationItem'
import ItemTypes from './ItemTypes';

const target = {
	hover(props, monitor) {
		const {base_item_id: draggedId, parent, items} = monitor.getItem()

		if (!monitor.isOver({shallow: true}))
			return

		const descendantNode = props.find(props.parent, items)
		if (descendantNode)
			return
		if (parent == props.parent || draggedId == props.parent)
			return

		props.move(draggedId, props.base_item_id, props.parent, 'tree')
	}
}

@DropTarget(ItemTypes.NAVNODE, target, (connect, monitor) => ({connectDropTarget: connect.dropTarget()}))
export default class NavigationTree extends Component {
	static propTypes = {
		items: PropTypes.array,
		parent: PropTypes.any,
		move: PropTypes.func.isRequired,
		find: PropTypes.func.isRequired
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
				{items && items.map((item, i) => {
					return <NavigationItem key={item.base_item_id} base_item_id={item.base_item_id} parent={parent} item={item} move={move} find={find}/>
				})}
			</div>
		)
	}
}
