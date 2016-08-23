import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavigationContainer from './NavigationContainer';

let tree = {"root":
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

let availableItems = {
  items: [{
    base_item_id: 7,
    title: 'HelloItemAvailable',
    slug: 'halilo'
  }, {
    base_item_id: 5,
    title: 'AboutAvailable',
    slug: 'halilo5'
  }, {
    base_item_id: 9,
    title: 'SimpleItemAvailable',
    slug: 'halilo7'
  }]
};

ReactDOM.render(
<NavigationContainer tree={tree} availableItems={availableItems}/>,
document.getElementById('container-sortable'))


//
// import Breadcrumbs from './Breadcrumbs'
//
// ReactDOM.render(<Breadcrumbs crumbs={[{name: 'Hel1', 'url': 'hhh'}, {name: 'Hel2', 'url': 'hhh2'}, {name: 'Hel3', 'url': 'hhh3'}]} />,
// document.getElementById('container'))
