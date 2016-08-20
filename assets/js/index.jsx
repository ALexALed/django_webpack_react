import React, { Component } from 'react';
import Container from './Container';
import ReactDOM from 'react-dom';


export default class SortableSimple extends Component {
  render() {
    return (
      <div>
        <p>
          <b><a href='https://github.com/gaearon/react-dnd/tree/master/examples/04%20Sortable/Simple'>Browse the Source</a></b>
        </p>
        <p>
          It is easy to implement a sortable interface with React DnD. Just make the same component both a drag source and a drop target, and reorder the data in the <code>hover</code> handler.
        </p>
        <Container />
      </div>
    );
  }
}

import Breadcrumbs from './Breadcrumbs'

ReactDOM.render(<Breadcrumbs crumbs={[{name: 'Hel1', 'url': 'hhh'}, {name: 'Hel2', 'url': 'hhh2'}, {name: 'Hel3', 'url': 'hhh3'}]} />,
    document.getElementById('container'))
