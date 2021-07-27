import React,{Component} from 'react';

export default class extends Component {
    constructor(){
        super(...arguments);
        this.foods = [
            {name: 'Bread', quantity: 10},
            {name: 'Egg', quantity: 20},
            {name: 'Milk', quantity: 50},
        ]
    }
}