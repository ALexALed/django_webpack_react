import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import NavigationTree from './NavigationTree'
import NavigationApp from './NavigationApp'

export default class Index extends Component {
  state =
    {"tree":
      [
          {"slug": "blue-socks-and-shorts",
          "title": "Blue socks and shorts",
          "base_item_id": 1,
          "items": []},
          {"slug": "test-name-third",
          "title": "test name second",
          "base_item_id": 8,
          "items": [
            {"slug": "/about/unisport",
            "title": "About Unisport",
            "base_item_id": 4,
            "items": [
              {"slug": "/1about/unisport",
              "title": "1About Unisport",
              "base_item_id": 34, "items": []},
              {"slug": "/2about/unisport1",
              "title": "2About Unisport1",
              "base_item_id": 76, "items": []}
            ]},
            {"slug": "/about/unisport1",
            "title": "About Unisport1",
            "base_item_id": 56, "items": []}
          ]}]
    };

  moveItem(id, afterId, nodeId) {
    if (id == afterId) return

    let {tree} = this.state

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

    const item = {...this.findItem(id, tree)}
    if (!item.base_item_id) {
      return
    }

    const dest = nodeId ? this.findItem(nodeId, tree).items : tree

    if (!afterId) {
      removeNode(id, tree)
      dest.push(item)
    } else {
      const index = dest.indexOf(dest.filter(v => v.base_item_id == afterId).shift())
      removeNode(id, tree)
      dest.splice(index, 0, item)
    }

    this.setState({tree})
  }

  findItem(id, items) {
    for (const node of items) {
      if (node.base_item_id == id) return node
      if (node.items && node.items.length) {
        const result = this.findItem(id, node.items)
        if (result) {
          return result
        }
      }
    }

    return false
  }

  render() {
    const {tree} = this.state

    return <div>
      <NavigationTree
        parent={null}
        items={tree}
        move={this.moveItem.bind(this)}
        find={this.findItem.bind(this)}
      />
    </div>
  }
}

ReactDOM.render((<NavigationApp>
      <Index />
  </NavigationApp>),
document.getElementById('container-sortable'))

// import Breadcrumbs from './Breadcrumbs'
//
// ReactDOM.render(<Breadcrumbs crumbs={[{name: 'Hel1', 'url': 'hhh'}, {name: 'Hel2', 'url': 'hhh2'}, {name: 'Hel3', 'url': 'hhh3'}]} />,
// document.getElementById('container'))
