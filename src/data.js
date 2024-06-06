import Room1Img from "./assets/rooms/1.jpg";
import Room1ImgLg from "./assets/rooms/1-lg.jpg";
import Room2Img from "./assets/rooms/2.jpg";
import Room2ImgLg from "./assets/rooms/2-lg.jpg";
import Room3Img from "./assets/rooms/3.jpg";
import Room3ImgLg from "./assets/rooms/3-lg.jpg";
import Room4Img from "./assets/rooms/4.jpg";
import Room4ImgLg from "./assets/rooms/4-lg.jpg";
import Room5Img from "./assets/rooms/5.jpg";
import Room5ImgLg from "./assets/rooms/5-lg.jpg";
import Room6Img from "./assets/rooms/6.jpg";
import Room6ImgLg from "./assets/rooms/6-lg.jpg";
import Room7Img from "./assets/rooms/7.jpg";
import Room7ImgLg from "./assets/rooms/7-lg.jpg";
import Room8Img from "./assets/rooms/8.jpg";
import Room8ImgLg from "./assets/rooms/8-lg.jpg";

import { FaWifi, FaCoffee, FaBath, FaParking, FaSwimmingPool, FaHotdog, FaStopwatch, FaCocktail} from 'react-icons/fa';

export const roomData = [{
    id: 1,
    name: 'Superior Room',
    description: 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    facilities: [
        {name: "Wifi", icon: <FaWifi />},
        {name: "Coffee", icon: <FaCoffee />},
        {name: "Bath", icon: <FaBath />},
        {name: "Parking", icon: <FaParking />},
        {name: "Swimming", icon: <FaSwimmingPool />},
        {name: "Breakfast", icon: <FaHotdog />},
        {name: "GYM", icon: <FaStopwatch />},
        {name: "Drinks", icon: <FaCocktail />},
    ],
    size: 30,
    maxPerson: 1,
    price: 115,
    image: Room1Img,
    imageLg: Room1ImgLg,
},
{
    id: 2,
    name: 'Signature Room',
    description: 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    facilities: [
        {name: "Wifi", icon: <FaWifi />},
        {name: "Coffee", icon: <FaCoffee />},
        {name: "Bath", icon: <FaBath />},
        {name: "Parking", icon: <FaParking />},
        {name: "Swimming", icon: <FaSwimmingPool />},
        {name: "Breakfast", icon: <FaHotdog />},
        {name: "GYM", icon: <FaStopwatch />},
        {name: "Drinks", icon: <FaCocktail />},
    ],
    size: 70,
    maxPerson: 2,
    price: 220,
    image: Room2Img,
    imageLg: Room2ImgLg,
},
{
    id: 3,
    name: 'Deluxe Room',
    description: 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    facilities: [
        {name: "Wifi", icon: <FaWifi />},
        {name: "Coffee", icon: <FaCoffee />},
        {name: "Bath", icon: <FaBath />},
        {name: "Parking", icon: <FaParking />},
        {name: "Swimming", icon: <FaSwimmingPool />},
        {name: "Hotdog", icon: <FaHotdog />},
        {name: "Stopwatch", icon: <FaStopwatch />},
        {name: "Cocktail", icon: <FaCocktail />},
    ],
    size: 50,
    maxPerson: 3,
    price: 265,
    image: Room3Img,
    imageLg: Room3ImgLg,
},
{
    id: 4,
    name: 'Luxury Room',
    description: 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    facilities: [
        {name: "Wifi", icon: <FaWifi />},
        {name: "Coffee", icon: <FaCoffee />},
        {name: "Bath", icon: <FaBath />},
        {name: "Parking", icon: <FaParking />},
        {name: "Swimming", icon: <FaSwimmingPool />},
        {name: "Hotdog", icon: <FaHotdog />},
        {name: "Stopwatch", icon: <FaStopwatch />},
        {name: "Cocktail", icon: <FaCocktail />},
    ],
    size: 50,
    maxPerson: 4,
    price: 289,
    image: Room4Img,
    imageLg: Room4ImgLg,
},
{
    id: 5,
    name: 'Luxury Suite Room',
    description: 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    facilities: [
        {name: "Wifi", icon: <FaWifi />},
        {name: "Coffee", icon: <FaCoffee />},
        {name: "Bath", icon: <FaBath />},
        {name: "Parking", icon: <FaParking />},
        {name: "Swimming", icon: <FaSwimmingPool />},
        {name: "Hotdog", icon: <FaHotdog />},
        {name: "Stopwatch", icon: <FaStopwatch />},
        {name: "Cocktail", icon: <FaCocktail />},
    ],
    size: 90,
    maxPerson: 5,
    price: 320,
    image: Room5Img,
    imageLg: Room5ImgLg,
},
{
    id: 6,
    name: 'Deluxe Room',
    description: 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    facilities: [
        {name: "Wifi", icon: <FaWifi />},
        {name: "Coffee", icon: <FaCoffee />},
        {name: "Bath", icon: <FaBath />},
        {name: "Parking", icon: <FaParking />},
        {name: "Swimming", icon: <FaSwimmingPool />},
        {name: "Hotdog", icon: <FaHotdog />},
        {name: "Stopwatch", icon: <FaStopwatch />},
        {name: "Cocktail", icon: <FaCocktail />},
    ],
    size: 45,
    maxPerson: 6,
    price: 344,
    image: Room6Img,
    imageLg: Room6ImgLg,
},
{
    id: 7,
    name: 'Luxury Room',
    description: 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    facilities: [
        {name: "Wifi", icon: <FaWifi />},
        {name: "Coffee", icon: <FaCoffee />},
        {name: "Bath", icon: <FaBath />},
        {name: "Parking", icon: <FaParking />},
        {name: "Swimming", icon: <FaSwimmingPool />},
        {name: "Hotdog", icon: <FaHotdog />},
        {name: "Stopwatch", icon: <FaStopwatch />},
        {name: "Cocktail", icon: <FaCocktail />},
    ],
    size: 84,
    maxPerson: 7,
    price: 389,
    image: Room7Img,
    imageLg: Room7ImgLg,
}
,{
    id: 8,
    name: 'Gello Room',
    description: 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    facilities: [
        {name: "Wifi", icon: <FaWifi />},
        {name: "Coffee", icon: <FaCoffee />},
        {name: "Bath", icon: <FaBath />},
        {name: "Parking", icon: <FaParking />},
        {name: "Swimming", icon: <FaSwimmingPool />},
        {name: "Hotdog", icon: <FaHotdog />},
        {name: "Stopwatch", icon: <FaStopwatch />},
        {name: "Cocktail", icon: <FaCocktail />},
    ],
    size: 39,
    maxPerson: 3,
    price: 125,
    image: Room8Img,
    imageLg: Room8ImgLg,
}]