import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import NavigationIndex from './NavigationIndex'
import NavigationApp from './NavigationApp'

let tree = {
    "tree": [
        {
            "slug": "blue-socks-and-shorts",
            "title": "Blue socks and shorts",
            "base_item_id": 1,
            "items": []
        }, {
            "slug": "test-name-third",
            "title": "test name second",
            "base_item_id": 8,
            "items": [
                {
                    "slug": "/about/unisport",
                    "title": "About Unisport",
                    "base_item_id": 4,
                    "items": [
                        {
                            "slug": "/1about/unisport",
                            "title": "1About Unisport",
                            "base_item_id": 34,
                            "items": []
                        }, {
                            "slug": "/2about/unisport1",
                            "title": "2About Unisport1",
                            "base_item_id": 76,
                            "items": []
                        }
                    ]
                }, {
                    "slug": "/about/unisport1",
                    "title": "About Unisport1",
                    "base_item_id": 56,
                    "items": []
                }
            ]
        }
    ]
};

//Structure was changed
let available = {
    "items": [
        {
            "slug": "/unisport/about",
            "title": "Statatic item",
            "base_item_id": 42,
        }, {
            "slug": "UPDATE_3/hello",
            "title": "New item",
            "base_item_id": 3,
        }, {
            "slug": "wommm/UPDATE_6",
            "title": "wommm",
            "base_item_id": 6,
        }
    ]
}

ReactDOM.render((
    <NavigationApp>
        <NavigationIndex tree={tree} available={available}/>
    </NavigationApp>
), document.getElementById('container-sortable'))
