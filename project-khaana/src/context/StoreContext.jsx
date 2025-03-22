import { createContext } from "react";
import food_1 from "../assets/food_1.png";
import food_2 from "../assets/food_2.png";
import food_3 from "../assets/food_3.png";
import food_4 from "../assets/food_4.png";
import food_5 from "../assets/food_5.png";
import food_6 from "../assets/food_6.png";
import food_7 from "../assets/food_7.png";
import food_8 from "../assets/food_8.png";
import food_9 from "../assets/food_9.png";
import food_10 from "../assets/food_10.png";
import food_11 from "../assets/food_11.png";
import food_12 from "../assets/food_12.png";
import food_13 from "../assets/food_13.png";
import food_14 from "../assets/food_14.png";
import food_15 from "../assets/food_15.png";
import food_16 from "../assets/food_16.png";
import food_17 from "../assets/food_17.png";
import food_18 from "../assets/food_18.png";
import food_19 from "../assets/food_19.png";
import food_20 from "../assets/food_20.png";
import food_21 from "../assets/food_21.png";
import food_22 from "../assets/food_22.png";
import food_23 from "../assets/food_23.png";
import food_24 from "../assets/food_24.png";
import food_25 from "../assets/food_25.png";
import food_26 from "../assets/food_26.png";
import food_27 from "../assets/food_27.png";
import food_28 from "../assets/food_28.png";
import food_29 from "../assets/food_29.png";
import food_30 from "../assets/food_30.png";
import food_31 from "../assets/food_31.png";
import food_32 from "../assets/food_32.png";

const food_list = [
    {
        _id: "1",
        name: "Greek salad",
        image: food_1,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    },
    {
        _id: "2",
        name: "Veg salad",
        image: food_2,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    },
    {
        _id: "3",
        name: "Clover Salad",
        image: food_3,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    },
    {
        _id: "4",
        name: "Chicken Salad",
        image: food_4,
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    },
    {
        _id: "5",
        name: "Lasagna Rolls",
        image: food_5,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    },
    {
        _id: "6",
        name: "Peri Peri Rolls",
        image: food_6,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    },
    {
        _id: "7",
        name: "Chicken Rolls",
        image: food_7,
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    },
    {
        _id: "8",
        name: "Veg Rolls",
        image: food_8,
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    },
    {
        _id: "9",
        name: "Ripple Ice Cream",
        image: food_9,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    },
    {
        _id: "10",
        name: "Fruit Ice Cream",
        image: food_10,
        price: 22,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    },
    {
        _id: "11",
        name: "Jar Ice Cream",
        image: food_11,
        price: 10,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    },
    {
        _id: "12",
        name: "Vanilla Ice Cream",
        image: food_12,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    }
];

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const contextValue = {
        food_list
    };
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
