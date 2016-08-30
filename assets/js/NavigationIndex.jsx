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
        this.state = {tree: props.tree['tree'], 'available': props.available['items']};
    }

    moveItem(id, afterId, nodeId, targetSlug, moveAfterRelease=false) {
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

        let item = {
            ...this.findItem(id, tree)
        }

        let isFromAvailable = false
        //Try find in available
        if(!item.base_item_id){
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

        if(targetSlug=='available'){
            dest = available
        }else{
            dest = nodeId
                  ? this.findItem(nodeId, tree).items
                  : tree
        }

        if(!dest){
          dest = available
        }

        if((dest == available) && (!moveAfterRelease)){
          return
        }

        if(!dest){
          return
        }

        if (!afterId) {
            removeNode(id, tree)
            dest.push(item)
        } else {
            const index = dest.indexOf(dest.filter(v => v.base_item_id == afterId).shift())
            removeNode(id, tree)
            dest.splice(index, 0, item)
        }

        if(isFromAvailable){
          removeNode(id, available)
        }

        this.setState({tree: tree, available: available})
    }

    findItem(id, items) {

        for (const node of items) {
            if (node.base_item_id == id)
                return node
            if (node.items && node.items.length) {
                const result = this.findItem(id, node.items)
                if (result) {
                    return result
                }
            }
        }
        return false

      if(!items){
        return false
      }

    }

    render() {
        const {tree, available} = this.state
        return (<div>
            <NavigationTree parent={null} items={tree} move={this.moveItem.bind(this)} find={this.findItem.bind(this)}/>
            <h3>Available items</h3>
            <NavigationAvailableItems items={available} move={this.moveItem.bind(this)} find={this.findItem.bind(this)}/>
        </div>)
    }
}
