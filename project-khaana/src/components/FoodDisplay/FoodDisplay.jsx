import React from 'react';
import food_1 from '../../assets/food_1.png';
import food_2 from '../../assets/food_2.png';
import food_3 from '../../assets/food_3.png';
import food_4 from '../../assets/food_4.png';
import food_5 from '../../assets/food_5.png';
import food_6 from '../../assets/food_6.png';
import food_7 from '../../assets/food_7.png';
import food_8 from '../../assets/food_8.png';
import food_9 from '../../assets/food_9.png';
import food_10 from '../../assets/food_10.png';
import food_11 from '../../assets/food_11.png';
import food_12 from '../../assets/food_12.png';
import food_13 from '../../assets/food_13.png';
import food_14 from '../../assets/food_14.png';
import food_15 from '../../assets/food_15.png';
import food_16 from '../../assets/food_16.png';
import food_17 from '../../assets/food_17.png';
import food_18 from '../../assets/food_18.png';
import food_19 from '../../assets/food_19.png';
import food_20 from '../../assets/food_20.png';
import food_21 from '../../assets/food_21.png';
import food_22 from '../../assets/food_22.png';
import food_23 from '../../assets/food_23.png';
import food_24 from '../../assets/food_24.png';
import food_25 from '../../assets/food_25.png';
import food_26 from '../../assets/food_26.png';
import food_27 from '../../assets/food_27.png';
import food_28 from '../../assets/food_28.png';
import food_29 from '../../assets/food_29.png';
import food_30 from '../../assets/food_30.png';
import food_31 from '../../assets/food_31.png';
import food_32 from '../../assets/food_32.png';

import './FoodDisplay.css';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
    const food_list = [
        { _id: "1", name: "Greek salad", image: food_1, price: 12, description: "Healthy and fresh salad.", category: "Salad" },
        { _id: "2", name: "Veg salad", image: food_2, price: 18, description: "A delicious mix of vegetables.", category: "Salad" },
        { _id: "3", name: "Clover Salad", image: food_3, price: 16, description: "Tasty and nutritious.", category: "Salad" },
        { _id: "4", name: "Chicken Salad", image: food_4, price: 24, description: "High-protein chicken salad.", category: "Salad" },
        { _id: "5", name: "Lasagna Rolls", image: food_5, price: 14, description: "Delicious Italian rolls.", category: "Rolls" },
        { _id: "6", name: "Peri Peri Rolls", image: food_6, price: 12, description: "Spicy and flavorful rolls.", category: "Rolls" },
        { _id: "7", name: "Chicken Rolls", image: food_7, price: 20, description: "Juicy chicken rolls.", category: "Rolls" },
        { _id: "8", name: "Veg Rolls", image: food_8, price: 15, description: "Healthy vegetarian rolls.", category: "Rolls" },
        { _id: "9", name: "Ripple Ice Cream", image: food_9, price: 14, description: "Smooth and creamy dessert.", category: "Deserts" },
        { _id: "10", name: "Fruit Ice Cream", image: food_10, price: 22, description: "Fresh fruit flavor.", category: "Deserts" },
        { _id: "11", name: "Jar Ice Cream", image: food_11, price: 10, description: "Ice cream in a jar.", category: "Deserts" },
        { _id: "12", name: "Vanilla Ice Cream", image: food_12, price: 12, description: "Classic vanilla taste.", category: "Deserts" },
        { _id: "13", name: "Chicken Sandwich", image: food_13, price: 12, description: "Crispy chicken sandwich.", category: "Sandwich" },
        { _id: "14", name: "Vegan Sandwich", image: food_14, price: 18, description: "A plant-based delight.", category: "Sandwich" },
        { _id: "15", name: "Grilled Sandwich", image: food_15, price: 16, description: "Perfectly grilled sandwich.", category: "Sandwich" },
        { _id: "16", name: "Bread Sandwich", image: food_16, price: 24, description: "Simple and tasty.", category: "Sandwich" },
        { _id: "17", name: "Cup Cake", image: food_17, price: 14, description: "Soft and sweet cupcake.", category: "Cake" },
        { _id: "18", name: "Vegan Cake", image: food_18, price: 12, description: "Dairy-free delicious cake.", category: "Cake" },
        { _id: "19", name: "Butterscotch Cake", image: food_19, price: 20, description: "Rich butterscotch flavor.", category: "Cake" },
        { _id: "20", name: "Sliced Cake", image: food_20, price: 15, description: "A perfect slice of cake.", category: "Cake" },
        { _id: "21", name: "Garlic Mushroom", image: food_21, price: 14, description: "Flavorful garlic mushrooms.", category: "Pure Veg" },
        { _id: "22", name: "Fried Cauliflower", image: food_22, price: 22, description: "Crispy and delicious.", category: "Pure Veg" },
        { _id: "23", name: "Mix Veg Pulao", image: food_23, price: 10, description: "Healthy mixed veggie rice.", category: "Pure Veg" },
        { _id: "24", name: "Rice Zucchini", image: food_24, price: 12, description: "A unique zucchini rice dish.", category: "Pure Veg" },
        { _id: "25", name: "Cheese Pasta", image: food_25, price: 12, description: "Cheesy and creamy pasta.", category: "Pasta" },
        { _id: "26", name: "Tomato Pasta", image: food_26, price: 18, description: "Classic tomato-based pasta.", category: "Pasta" },
        { _id: "27", name: "Creamy Pasta", image: food_27, price: 16, description: "Rich and creamy pasta.", category: "Pasta" },
        { _id: "28", name: "Chicken Pasta", image: food_28, price: 24, description: "Delicious chicken pasta.", category: "Pasta" },
        { _id: "29", name: "Butter Noodles", image: food_29, price: 14, description: "Simple yet flavorful noodles.", category: "Noodles" },
        { _id: "30", name: "Veg Noodles", image: food_30, price: 12, description: "Stir-fried vegetable noodles.", category: "Noodles" },
        { _id: "31", name: "Somen Noodles", image: food_31, price: 20, description: "Japanese-style noodles.", category: "Noodles" },
        { _id: "32", name: "Cooked Noodles", image: food_32, price: 15, description: "Home-cooked noodle dish.", category: "Noodles" }
    ];

    return (
        <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item, index) => {
                console.log(category, item.category); // Debugging output

                if (category === "All" || category === item.category) {
                    return (
                        <FoodItem 
                            key={index} 
                            id={item._id} 
                            name={item.name} 
                            description={item.description}  
                            price={item.price} 
                            image={item.image} 
                        />
                    );
                }
                return null; // Ensures undefined isn't returned inside .map()
            })}
        </div>
        </div>
    );
};

export default FoodDisplay;
