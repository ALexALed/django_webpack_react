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

  moveItem(dragIndex, hoverIndex, dragType) {
    const { tree } = this.state;
    const { availableItems } = this.state;
    console.log(dragType);
    const dragItem = items[dragIndex];

    this.setState(update(this.state, {
      items: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragItem]
        ]
      }
    }));
  }

  render() {
    const tree = this.state.tree.items;
    const availableItems = this.state.availableItems.items;
    return (
      <div>
      <div id="tree" style={style}>
        {tree.map((item, i) => {
          return (
            <NavigationItem key={item.id}
                  index={i}
                  id={item.id}
                  text={item.text}
                  moveItem={this.moveItem}
                  itemType="tree"/>
          );
        })}
      </div>
      <h3>Available</h3>
      <div>
      {availableItems.map((item, i) => {
        return (
          <NavigationItem key={item.id}
                index={i}
                id={item.id}
                text={item.text}
                moveItem={this.moveItem}
                itemType="available"/>
        );
      })}
      </div>
      </div>
    );
  }
}
