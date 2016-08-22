import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavigationContainer from './NavigationContainer';

let tree = {
  items: [{
    id: 1,
    text: 'HelloItem'
  }, {
    id: 2,
    text: 'About',
  }, {
    id: 3,
    text: 'SimpleItem'
  }]
};

let availableItems = {
  items: [{
    id: 1,
    text: 'HelloItemAvailable'
  }, {
    id: 2,
    text: 'AboutAvailable',
  }, {
    id: 3,
    text: 'SimpleItemAvailable'
  }]
};

ReactDOM.render(
<NavigationContainer tree={tree} availableItems={availableItems}/>,
document.getElementById('container-sortable'))



import Breadcrumbs from './Breadcrumbs'

ReactDOM.render(<Breadcrumbs crumbs={[{name: 'Hel1', 'url': 'hhh'}, {name: 'Hel2', 'url': 'hhh2'}, {name: 'Hel3', 'url': 'hhh3'}]} />,
document.getElementById('container'))
