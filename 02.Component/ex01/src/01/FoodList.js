import React from 'react';
import ListItem from './ListItem';

export default class FoodList extends Component {
    render(){
        console.log(this.props.foods);

        const foods=[];
        this.foods.forEach(function(food, index){
            food[indes] = <ListItem name={food.name} quantity={food.quantity} />;
        });

        return(
            <ul>
                { foods }
            </ul>
        )
    }   
}
     