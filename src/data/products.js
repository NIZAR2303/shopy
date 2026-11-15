import laptop from '../assets/laptop.jpg';
import mobile from '../assets/mobile.jpg';
import keyboard from '../assets/keyboard.jpg';
import headphone from '../assets/headphone.jpg';

const products = [

    {
        id: 1,
        name: "Laptop",
        price: 50000,
        description: "High Performance Laptop",
        rating: 4.5,
        category: "Electronics",
        reviews: 120,
        image: laptop
    },

    {
        id: 2,
        name: "Mobile",
        price: 20000,
        description: "Latest Smartphone",
        rating: 4.3,
        category: "Electronics",
        reviews: 100,
        image: mobile
    },

    {
        id: 3,
        name: "Headphone",
        price: 2000,
        description: "Wireless Headphone",
        rating: 4.2,
        category: "Accessories",
        reviews: 80,
        image: headphone
    },

    {
        id: 4,
        name: "Keyboard",
        price: 1500,
        description: "Mechanical Keyboard",
        rating: 4.4,
        category: "Accessories",
        reviews: 60,
        image: keyboard
    }

];

export default products;