import React, { Component } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import NavigationItem from './NavigationItem';


const style = {
  width: 400
};

@DragDropContext(HTML5Backend)
export default class NavigationContainer extends Component {

  constructor(props) {
    super(props);
    this.moveItem = this.moveItem.bind(this);
    this.state = {
      tree: this.props.tree,
      availableItems: this.props.availableItems};
    }

    addItemToTree(item){
      let currentState = this.state;
      currentState.tree.push()
    }

    moveItem(dragItem, hoverItem) {
      const { tree } = this.state;
      const { availableItems } = this.state;

      if (dragItem.itemType == "available"){
        const dragItemValue = availableItems[dragItem.index];
        this.setState(update(this.state.availableItems.items, {
          items: {
            $splice: [
              [dragItem.index, 1],
              [hoverItem.index, 0, dragItemValue]
            ]
          }
        }));
      }else{
        const dragItemValue = tree[dragItem.index];
        this.setState(update(this.state.tree.items, {
          items: {
            $splice: [
              [dragItem.index, 1],
              [hoverItem.index, 0, dragItemValue]
            ]
          }
        }));
      }
    }

    render() {
      const treeItems = this.state.tree.root;
      const availableItems = this.state.availableItems.items;
      let children = [];
      return (
        <div><div id="tree" style={style}>
        {treeItems.map((item, i) => {
          return <NavigationItem key={item.base_item_id}
          index={item.base_item_id}
          base_item_id={item.base_item_id}
          title={item.title}
          slug={item.slug}
          moveItem={this.moveItem}
          itemType="tree"
          children={item.items}>
          </NavigationItem>

          })}</div>

          <h3>Available</h3>
          <div>
          </div>
        </div>
      );
    }
  }


  //{availableItems.map((item, i) => {
  //   return (
  //     <NavigationItem key={item.id}
  //           index={i}
  //           base_item_id={item.base_item_id}
  //           title={item.title}
  //           slug={item.slug}
  //           moveItem={this.moveItem}
  //           itemType="available"/>
  //   );
  // })}
