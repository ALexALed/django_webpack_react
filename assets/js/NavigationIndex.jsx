import React, {Component, PropTypes} from 'react'
import NavigationTree from './NavigationTree'
import NavigationAvailableItems from './NavigationAvailableItems'

export default class NavigationIndex extends Component {

	static propTypes = {
		tree: PropTypes.object.isRequired,
		available: PropTypes.object.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			tree: props.tree['tree'],
			'available': props.available['items']
		};
	}

	getItemsParentsFrom() {
		let tree = this.state.tree
		function treeItems(items, parentArray, itemsArray = []) {
			for (let item of items) {
				let currentParentsArray = null;
				if (!parentArray) {
					currentParentsArray = [
						{
							'base_item_id': item['base_item_id'],
							'slug': item['slug']
						}
					];
				} else {
					currentParentsArray = parentArray.slice();
					currentParentsArray.push({'base_item_id': item['base_item_id'], 'slug': item['slug']})
				}
				itemsArray.push({base_item_id: item['base_item_id'], 'parentsValue': currentParentsArray});

				if ('items' in item) {
					treeItems(item['items'], currentParentsArray, itemsArray)
				}
			};
			return itemsArray;
		};
		return treeItems(tree);
	}

	getCurrentItemParents(base_item_id, itemsParents) {
		for (let item of itemsParents) {
			if (item.base_item_id === base_item_id) {
				return item['parentsValue'];
			}
		}
		return [];
	}

	moveItem(id, afterId, nodeId, targetSlug, moveAfterRelease = false) {
		if (id == afterId) {
			return
		}

		let {tree} = this.state
		let {available} = this.state

		const removeNode = (id, items) => {
			for (const node of items) {
				if (node.base_item_id == id) {
					items.splice(items.indexOf(node), 1)
					return
				}

				if (node.items && node.items.length) {
					removeNode(id, node.items)
				}
			}
		}

		const addChildrenToAvailable = (item) => {
			for (let currentItem of item.items) {
				available.push(currentItem)
				if (currentItem.items && currentItem.items.length) {
					addChildrenToAvailable(currentItem)
				}
			}
		}

		let item = {
			...this.findItem(id, tree)
		}

		let isFromAvailable = false
		//Try find in available
		if (!item.base_item_id) {
			item = {
				...this.findItem(id, available)
			}
			item.items = []
			isFromAvailable = true;
		}

		if (!item.base_item_id) {
			return
		}

		let dest = null

		if (targetSlug == 'available') {
			dest = available
		} else {
			dest = nodeId
				? this.findItem(nodeId, tree).items
				: tree
		}

		if (!dest) {
			dest = available
		}

		if ((dest == available) && (!moveAfterRelease)) {
			return
		}

		if (!dest) {
			return
		}

		if (dest !== available) {
			let itemsParents = this.getItemsParentsFrom()
			let parentsParent = this.getCurrentItemParents(nodeId, itemsParents)
			if (parentsParent.length > 4) {
				return
			}
		}

		let errors = false;

		if (!afterId) {
			removeNode(id, tree, moveAfterRelease)
			dest.push(item)
		} else {
			const index = dest.indexOf(dest.filter(v => v.base_item_id == afterId).shift())
			removeNode(id, tree, moveAfterRelease)
			dest.splice(index, 0, item)

		}

		if (moveAfterRelease) {
			addChildrenToAvailable(item)
		}

		if (isFromAvailable) {
			removeNode(id, available)
		}

		if (this.findItem(item.base_item_id, tree) || this.findItem(item.base_item_id, available)) {
			this.setState({tree: tree, available: available})
		}

	}

	findItem(id, items) {
		for (let nodeIndex = 0; nodeIndex < items.length; nodeIndex++) {
			let node = items[nodeIndex]
			if (node.base_item_id == id)
				return node
			if (node.items && node.items.length) {
				let result = this.findItem(id, node.items)
				if (result) {
					return result
				}
			}
		}
		return false

		if (!items) {
			return false
		}
	}

	render() {
		const {tree, available} = this.state
		return (
			<div>
				<NavigationTree parent={null} items={tree} move={this.moveItem.bind(this)} find={this.findItem.bind(this)}/>
				<h3>Available items</h3>
				<NavigationAvailableItems items={available} move={this.moveItem.bind(this)} find={this.findItem.bind(this)}/>
			</div>
		)
	}
}
