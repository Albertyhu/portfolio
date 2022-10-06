//import { Battleship, ComicCon, EarthTone, Frontier_Adventurers, Reddit, Simpsons, ToDo, WeatherApp } from './thumbnails';

import Battleship from './thumbnails/Battleship.JPG';
import ComicCon from './thumbnails/ComicCon.jpg';
import EarthTone from './thumbnails/EarthTone.JPG';
import Frontier_Adventurers from './thumbnails/Frontier_Adventurers.JPG';
import Reddit from './thumbnails/RedditClone.JPG';
import Simpsons from './thumbnails/Simpsons.JPG';
import ToDo from './thumbnails/ToDo.JPG';
import WeatherApp from './thumbnails/weatherApp.JPG'; 
import MoochiDog from './thumbnails/Moochi_dog.jpg'; 

const template =
{
    title: '',
    link: '',
    Github: '',
    description: '',
    attributesHeader: '',
    attributes: [],
    thumbnail: '',
    profileStyle: "standard", 
}

export const ProjectList = [
    {
        title: 'Earth Tone E-commerce Website', 
        link: 'https://albertyhu.github.io/tea-eCommerce-shop/', 
        Github: 'https://github.com/Albertyhu/tea-eCommerce-shop', 
        description: 'This is a sample site I built for an online store, written in React JS and integrated with Firebase and Stripe API.',
        attributesHeader: 'It has all the basic eCommerce functionalities including, but not limited to: ', 
        attributes: ['Product Pages', 'Search functionality', 'Creating a personal account', 'Credit cart functionality', 'Order processing'], 
        thumbnail: EarthTone, 
        type: "Web App Development/Design", 
        profileStyle: "standard", 
    }, 
    {
        title: 'Reddit Social Media Clone',
        link: 'https://react-clone-b735d.web.app/',
        Github: 'https://github.com/Albertyhu/Reddit-Clone',
        description: 'I cloned my favorite website Reddit using React JS and it is integrated with Firebase.',
        attributesHeader: 'It has all the basic features of Reddit including, but not limited to:',
        attributes: ['Creating a profile', 'Creating threads and being able to respond to them', 'Voting on thread and comments', 'Filtering thread feeds and comment feeds based on date, popularity and controversy', 'Toggling the display theme of each of the communities '],
        thumbnail: Reddit,
        type: "Web App Development",
        profileStyle: "standard", 
    },
    {
        title: 'Frontier Adventurers Mountain Climbing Site',
        link: 'https://albertyhu.github.io/Frontier-adventurers/',
        Github: 'https://github.com/Albertyhu/Frontier-adventurers',
        description: 'This is a clone of a mountain climbing site I\'ve built for client. The content has been changed for the client\'s interest in anonymity. The site is built with Webpack and demonstrates my ability to design modern looking websites. \n\n The clients had a very outdated website that did not capture attention. Visitors tend to leave immediately. It did not market their business properly. It is important that Frontier Adventurers improve their conversion rates, I help build them a website that achieves that.',
        attributesHeader: 'I took the following steps to modernize their website. ',
        attributes: ['Improve the responsive design so that the website can properly be displayed on any mobile platforms.', 'Improve the overall aesthetics of the website.', 'Improve the overall UI.' ],
        thumbnail: Frontier_Adventurers,
        type: "Web App Development/Design", 
        profileStyle: "standard", 
    },
    {
        title: 'Moochi Dog Saloon',
        link: 'https://moochidogsalon.com/',
        Github: '',
        description: 'Moochi Dog Salon came to me with their desire to modernize their outdated website. \n\n The family owned business in Southern California has built a reputation for providing quality dog grooming services to their clients for many years. \n\n However, the owners at Moochi Dog Salon were ripping their hairs out because issues with miscommunication over the phone with their customers..  \n\n When asking for quotes for grooming, customers usually have difficulty describing details about their dogs correctly. \n\n These details include the dog\'s breed, weight and size. \n\n And they are necessary for Moochi Dog groomers to generate accurate quotes for a grooming session. \n\n Thus, giving the customer an inaccurate quote over the phone would lead to frustration. Imagine the nasty surprise customers would get when they walk into the business and learn that the actual quote for grooming is different than what they heard on the phone. \n\n The owners of the business tried their best at mitigating this issue over the phone, but mistakes do tend to slip by. \n\n  And this have resulted to losing trust of some long time customers.\n\n To help resolve their situation, I worked the owners to modernize their website to be fun, engaging and more interactive.\n\n Most importantly, it was configured to serve as a guide for customers to make it easy for them to identify their own dog\'s breed, weight and size. \n\nThus, on phone calls about quotes, customers can refer to this guide to accurately describe their dogs for the grooming session.\n\n Thus, with this accurate reporting, Moochi Dog Salon saw two remarkable improvements to their business.The employees are more likely to provide an accurate quote for grooming and a lot of time was saved by avoiding the need to interrogate the customers about all the necessary details about their dog.\n\n After working with them, Moochi Dog Salon has been providing a very smooth customer experience.',
        attributesHeader: '',
        attributes: [],
        thumbnail: MoochiDog,
        profileStyle: "standard",
    },
    {
        title: 'Battleship Game',
        link: 'https://albertyhu.github.io/Battleship/',
        Github: 'https://github.com/Albertyhu/Battleship',
        description: 'This is a battleship game that I built with React JS and it involved a lot time spent testing functions with Jest. ',
        attributesHeader: '',
        attributes: [],
        thumbnail: Battleship,
        type: "Web App Development", 
        profileStyle: "standard", 
    },
    {
        title: 'Weather App ',
        link: 'https://albertyhu.github.io/Weather_App/',
        Github: 'https://github.com/Albertyhu/Weather_App',
        description: 'This is a weather app I\'ve built with Webpack. When the user inputs their location onto the app, the app will indicate the current weather at there and the background changes based on the address that the user inputs. ',
        attributesHeader: '',
        attributes: [],
        thumbnail: WeatherApp,
        type: "Web App Development", 
        profileStyle: "standard", 
    },
    {
        title: 'Photo Tagging Search Game ',
        link: 'https://photo-tagging-project.web.app/',
        Github: 'https://github.com/Albertyhu/photo-tagging-project',
        description: 'This is an Easter Hunt game built with React JS and Firebase. The object of the game is the find all characters inside picture while being timed. Once a character is found, a marker will be placed on that character. The locations of the characters are stored in Firestore and once the browser loads, the app will pull data of the location from Firebase. [image source: https://pxlcon.jimmysomething.com/]',
        attributesHeader: '',
        attributes: [],
        thumbnail: ComicCon,
        type: "Web App Development", 
        profileStyle: "standard", 
    },
    {
        title: 'Simpsons Memory Card Game',
        link: 'https://albertyhu.github.io/Simpsons-Memory-Card-Game/',
        Github: 'https://github.com/Albertyhu/Simpsons-Memory-Card-Game',
        description: 'This is a memory card game built in React JS. The object of this game is to click on each card once to score one point and to try get the highest score.If you click on a card more than once, you lose the game and the score resets to zero.',
        attributesHeader: '',
        attributes: [],
        thumbnail: Simpsons,
        type: "Web App Development", 
        profileStyle: "standard", 
    },
    {
        title: 'To-Do List App using Firebase ',
        link: 'https://albertyhu.github.io/To-Do-APP/',
        Github: 'https://github.com/Albertyhu/To-Do-APP',
        description: 'This is an app built with Webpack that allows users to build a daily, weekly and monthly to-do list. Users can create an account and update their list dynamically. Users can also an a reminder through email of when the deadline of their task is approaching. The data is stored in Firebase. ',
        attributesHeader: '',
        attributes: [],
        thumbnail: ToDo,
        type: "Web App Development", 
        profileStyle: "standard", 
    },
]


const Obsolete = [
    {
        title: 'E-Commerce Mobile App',
        Github: 'https://github.com/Albertyhu/eCommerce-App',
        description: 'I’ve built an E-Commerce mobile app using React Native. Products, personal account information and orders are stored in Amazon AWS Amplify. Users can browse through various products, search for a particular product with the search, put products into their own cart and make purchases. It functions just like how any eCommerce application works. ',
        attributesHeader: 'It has all the functionalities of a typical E-Commerce including:',
        attributes: [
            'Searching for products',
            'Automatic updates on stocks',
            'Product Profile',
            'Making a purchase',
            'Procesing an order',
        ],
        thumbnail: '',
        type: "Mobile App Development",
    },
]