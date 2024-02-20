//import { Battleship, ComicCon, EarthTone, Frontier_Adventurers, Reddit, Simpsons, ToDo, WeatherApp } from './thumbnails';

import Battleship from "./thumbnails/Battleship.JPG";
import ComicCon from "./thumbnails/ComicCon.jpg";
import EarthTone from "./thumbnails/EarthTone.JPG";
import Frontier_Adventurers from "./thumbnails/Frontier_Adventurers.JPG";
import Reddit from "./thumbnails/RedditClone.JPG";
import Simpsons from "./thumbnails/Simpsons.JPG";
import ToDo from "./thumbnails/ToDo.JPG";
import WeatherApp from "./thumbnails/weatherApp.JPG";
import MoochiDog from "./thumbnails/Moochi_dog.jpg";
import GAweightloss from "./thumbnails/GeorgiaWeightLossCenter.JPG";
import RCPharmacy from "./projects/RCpharmacy/home.jpg";
import FilmDash from "./thumbnails/Film-Dash-movie-section.jpg"
import HenrysSpeakeasy from "./thumbnails/HenrysSpeakeasy.jpg";
import Blabber from './thumbnails/Blabber.jpg';
import ChatApp from './thumbnails/chat-app.webp';
import DesignInitiative from './thumbnails/full-city.webp';
import NaturalPatterns from "./thumbnails/natural-patterns.webp";
import NextJSTaskApp from "./thumbnails/NextJSTaskApp.webp"
import PrimeCleaning from "./thumbnails/prime-cleaning.webp"; 

const template = {
  title: "",
  link: "",
  Github: "",
  description: "",
  attributesHeader: "",
  attributes: [],
  thumbnail: "",
  profileStyle: "standard",
};

export const ProjectList = [
   {
    title: "Blabber: Full Stack Social Media Site",
    link: "https://blabber-71b2c.web.app/",
    Github: "https://github.com/Albertyhu/BlogClient",
    description:
        "Blabber is a social media platform that allows users to speak their mind. It gives users many features found in prevalent social media sites such as Facebook and Instagram to play around with. It communicates with an API that is built with Node JS. In addition, the server uses RESTful and MVC design patterns to save and manage data in Mongo DB. Json Web Tokens are used to authenticate users.",
    short: "Social Media Site", 
    attributesHeader:
        "It gives users many features found in prevalent social media sites such as Facebook and Instagram to play around with such as: ",
    attributes: [
        "Creating a post and formattting it with a rich text editor.",
        "Creating a replies in a comment tree.",
        "Liking posts and comments.",
        "Perusing through other users' profiles.",
        "Bulk upload images.",
        "Use filters to search for content on the site."
    ],
    thumbnail: Blabber,
    type: ["Full-stack", "frontend", "backend", "CRUD"],
    profileStyle: "custom",
    technologies: ["nde", "mongo", "react", "js", "css", "html", "tail", "express"], 
    technologyLink: ["NodeJS", "MongoDB", "ReactJS", "JavaScript", "CSS", "HTML", "Tailwind CSS", "Express"],
    path: "blabber",
    },
  {
      title: "Reddit Social Media Clone",
      link: "https://ReactJS-clone-b735d.web.app/",
      Github: "https://github.com/Albertyhu/Reddit-Clone",
      description:
          "I cloned my favorite website Reddit using ReactJS JS and it is integrated with Firebase. ",
      short: "Social Media Site", 
      attributesHeader:
          "It has all the basic features of Reddit including, but not limited to:",
      attributes: [
          "Creating a profile",
          "Creating threads and being able to respond to them",
          "Voting on thread and comments",
          "Filtering thread feeds and comment feeds based on date, popularity and controversy",
          "Toggling the display theme of each of the communities ",
      ],
      thumbnail: Reddit,
      type: ["frontend", "CRUD"],
      profileStyle:  "custom",
      technologies: ["react", "js", "css", "html", "firebase", "wpack"], 
      technologyLink: ["ReactJS", "JavaScript", "CSS", "HTML", "Jest", "Firebase", "Webpack", "SlateJS"],
      path: "reddit"
  },
  {
    title: "Earth Tone E-commerce Website",
    link: "https://earth-tone-project.web.app/",
    Github: "https://github.com/Albertyhu/EarthToneEcommerce",
    description:
      "Earth Tone is an E-Commerce site that sells tea products and is capable of handling real financial transactions. It has all the basic E-Commerce functionalities including, but not limited to creating an authenticated personal shopping accounting, finding products with the search bar, adding products to a cart/wish list, and creating an order. In addition, the site has an optimized user experience created with intuitive UX design practices, resulting in smooth and efficient navigation.",
    short: "E-Commerce Site", 
    attributesHeader:
      "It has all the basic eCommerce functionalities including, but not limited to: ",
    attributes: [
      "Product Pages",
      "Search functionality",
      "Creating a personal account",
      "Credit cart functionality",
      "Order processing",
    ],
    thumbnail: EarthTone,
    type: ["frontend", "backend", "Full-stack", "ecommerce"],
    profileStyle:  "custom",
    technologies: ["nde", "react", "js", "css", "html", "tail", "firebase", "wpack", "express"],
    technologyLink: ["NodeJS", "ReactJS", "JavaScript", "CSS", "HTML", "Tailwind CSS", "Firebase", "Webpack", "Express"],
    path: "earthtone"
  },  
  {
    title: "LA Design Initiative Agency Site",
    link: "https://www.ladesigninitiative.com/",
    Github: "https://github.com/Albertyhu/design-initiative",
    description: "LA Design Initiative is an agency site that I operate", 
    short: "Agency Site", 
    attributesHeader: "",
    attributes: [],
    thumbnail: DesignInitiative,
    type: ["frontend"],
    profileStyle:  "custom",
    technologies: ["astro-dark", "react", "js", "css", "html", "tail"], 
    technologyLink: ["Astro", "ReactJS", "JavaScript", "CSS", "HTML", "Tailwind CSS"],
    path: "design-initiative", 
    },
  {
    title: "Socket IO Chat App",
    link: "https://chat-app-brax.onreNodeJSr.com/",
    Github: "https://github.com/Albertyhu/simple-chat-app",
    description: "This is a chat app created with Node JS, Socket.io library, and EJS.",
    short: "Live Chat Site", 
    attributesHeader: "",
    attributes: [],
    thumbnail: ChatApp,
    type: ["backend"],
    profileStyle: "custom",
    technologies:["nde", "socketio", "ejs", "js", "css", "html"], 
    technologyLink: ["NodeJS", "Socket.IO", "EJS", "Express", "JavaScript", "CSS", "HTML"],
    path: "chat-app"
  }, 
   {
    title: "Film Dash - Internet Movie Database",
    link: "https://film-dash.onrender.com/catalog",
    Github: "https://github.com/Albertyhu/Film-Dash---Internet-Movie-Database-",
    description: "Film Dash is a movie data base built for film enthusiasts and it works similarly to Wikipedia, where everyone on the internet can make a contribution. Anyone can add, update, or even delete data in the database. It is created with Node JS, Express, Mongoose, and Tailwind CSS.",
    short: "Film Database Site",
    attributesHeader: "",
    attributes: [],
    thumbnail: FilmDash,
    type: ["Full-stack", "backend", "CRUD"],
    profileStyle: "standard",
    technologies: ["nde", "mongo", "ejs", "js", "tail", "css", "html", "jest"], 
    technologyLink: ["NodeJS", "MongoDB", "EJS", "JavaScript", "Tailwind CSS", "CSS", "HTML", "Jest", "Express"],
    path: "film-dash"
    },
    {
      title: "Henry's Speakeasy",
      link: "https://henrys-speakeasy.onrender.com/",
      Github: "https://github.com/Albertyhu/SpeakeasyMembershipSite",
      description: "Henry’s Speakeasy is a members only site for Speakeasy style bar. \n\n It is built with Node JS, Express, Mongoose and Tailwind CSS. \n\nUsers are anonymous to each other, unless they acquire Speakeasy membership by answering a riddle correctly after creating an account. \n\n Users can sign in as a guests, but to be a true member, they have to know the secret password. \n\n Once users become members of the Speakeasy, they can see the names and profile pics of other members. \n\n Users can also add their favorite drinks and add their social media links onto their on profile pages. \n\n The site uses Passport to authenticate users. \n\n If you want to know the answer to the riddle, it's \"seven\".",
      short: "Social Media Site", 
      attributesHeader: "",
      attributes: [],
      thumbnail: HenrysSpeakeasy,
      profileStyle: "standard",
      type: ["Full-stack", "backend", "CRUD"],
      technologies: ["nde", "mongo", "ejs", "js", "tail", "css", "html", "jest"],
      technologyLink: ["NodeJS", "MongoDB", "EJS", "JavaScript", "Tailwind CSS", "CSS", "HTML", "Jest", "Express"],
      path: "henrys-speakeasy"
    },
  {
    title: "Natural Patterns",
    link: "https://natural-patterns.netlify.app/",
    Github: "https://github.com/Albertyhu/uthan-template",
    description:
      "Natural Patterns is a family owned landscaping business. I built the site for them to help them stand out from their competition and achieve more leads.",
    short: "Landscaping Site",
    body:"<p>I spent a lot of time optimizing the site for speed and performance. The site is built with the web framework Astro, which is a static site generator that leverages server side rendering over client side rendering as much as possible. It is fast by default. </p><br /><p> I took additional steps to optimize the site by making sure images are their appropriate size. Having fast performance leads to better user experiencer. Nobody likes to wait for a website to load. In addition, by having a 100 page speed scord, the site meets Google's Core vital metrics, which is an essential SEO ranking factor.</p>",
    short: "Landscaping Site",
    attributesHeader: "",
    attributes: [],
    thumbnail: NaturalPatterns,
    type: ["frontend"],
    profileStyle: "standard",
    technologies: ["astro-dark", "react", "js", "css", "html", ],
    technologyLink: ["Astro", "ReactJS", "JavaScript", "Tailwind CSS", "CSS", "HTML", ],
    path: "natural-patterns"
  },
  {
    title: "Prime Cleaning Co.",
    link: "https://primecleaning.netlify.app/",
    Github: "https://github.com/Albertyhu/PrimeCleaningCompany",
    description: "",
    short: "Landscaping Site",
    body:"",
    short: "Cleaning Company Site",
    attributesHeader: "",
    attributes: [],
    thumbnail: PrimeCleaning,
    type: ["frontend"],
    profileStyle: "custom",
    technologies: ["astro-dark", "react", "js", "css", "html", ],
    technologyLink: ["Astro", "ReactJS", "JavaScript", "Tailwind CSS", "CSS", "HTML", ],
    path: "prime-cleaning"
  },
  {
    title: "Next JS Task App",
    link: "https://next-js-task-app.vercel.app/",
    Github: "https://github.com/Albertyhu/NextJS-TaskApp",
    description:
      "This is full stack task app that is created with Next JS and uses Mongo DB to store user accounts and their task lists. Users are able to create their own accounts and create their tasks list. Creating tasks are managed with standard CRUD operations using RESTful API. The authentification process is built with the libary Next-Auth. I spent a lot of time getting Next-Auth to work right because the original documentation was not enough and I had to rely on other sources to figure out to make it work properly.",
    short: "An over-engineered productivity application",
    body:"<div class = 'text-center'><p>If you want to test the app, you can use the following login info:</p><br /><p><b>Email: </b>JohnC@gmail.com</p><p><b>Password:</b> <i>password</i></p></div>",  
    attributesHeader: "",
    attributes: [],
    thumbnail: NextJSTaskApp,
    type: ["Full-stack", "frontend", "backend", "CRUD"],
    profileStyle: "standard",
    technologies: ["next", "mongo", "tail", "react", "ts", "js", "css", "html"], 
    technologyLink: ["NextJS", "Tailwind CSS", "TypeScript", "MongoDB", "ReactJS", "Express", "JavaScript", "CSS", "HTML"],
    path: "nextjs-task-app"
    },
  {
    title: "Frontier Adventurers Mountain Climbing Site",
    link: "https://albertyhu.github.io/Frontier-adventurers/",
    Github: "https://github.com/Albertyhu/Frontier-adventurers",
    description:
      "This is a clone of a mountain climbing site I've built for client. The content has been changed for the client's interest in anonymity. The site is built with Webpack and demonstrates my ability to design modern looking websites. \n\n The clients had a very outdated website that did not capture attention. Visitors tend to leave immediately. It did not market their business properly. It is important that Frontier Adventurers improve their conversion rates, I help build them a website that achieves that.",
    short: "Vanilla JS Site", 
    attributesHeader: "I took the following steps to modernize their website. ",
    attributes: [
      "Improve the responsive design so that the website can properly be displayed on any mobile platforms.",
      "Improve the overall aesthetics of the website.",
      "Improve the overall UI.",
    ],
    thumbnail: Frontier_Adventurers,
    type: ["frontend"],
    profileStyle: "standard",
    technologies: ["js", "css", "html", "wpack"],
    technologyLink: ["JavaScript", "CSS", "HTML", "Webpack"], 
    path: "frontier-adventures"
  },
{
    title: "Royal Compounding Pharmacy",
    link: "http://royalpharmacy.ca/",
    Github: "",
    description: "David Greiss owns a family pharmacy that innovated compounding medicine.\n However, it is hard to get proper attention online with an outdated website that the pharmacy owned for years. \n He meets with doctors regularly for business and he needed something that helps establish a good first impression of his business. \n I worked closely with Mr. Greiss on the layout of the content and aesthetic design of the website, and aimed to make sure that the not only does the layout grab attention, but it effectively helps to explain to visitors how compounding medicine was developed. \nAfter several weeks of labor, I helped Mr. Greiss develop a website with careful attention to color design, that is fully responsive and can be viewed on multiple platforms. \n Mr. Greiss now has an invaluable marketing tool that helps grow the reputation of his family pharmacy. ",
    short: "Pharmacy Site", 
    attributesHeader: "",
    attributes: [],
    type: ["frontend"], 
    thumbnail: RCPharmacy,
    profileStyle: "standard",
    technologies: ["word", "css", "html"],
    technologyLink: ["Wordpress", "CSS", "HTML"], 
    path: "royal-compounding-pharmacy", 
  },
  {
    title: "Moochi Dog Saloon",
    link: "https://moochidogsalon.com/",
    Github: "",
    description:
      "Moochi Dog Salon came to me with their desire to modernize their outdated website. \n\n The family owned business in Southern California has built a reputation for providing quality dog grooming services to their clients for many years. \n\n However, the owners at Moochi Dog Salon were ripping their hairs out because issues with miscommunication over the phone with their customers..  \n\n When asking for quotes for grooming, customers usually have difficulty describing details about their dogs correctly. \n\n These details include the dog's breed, weight and size. \n\n And they are necessary for Moochi Dog groomers to generate accurate quotes for a grooming session. \n\n Thus, giving the customer an inaccurate quote over the phone would lead to frustration. Imagine the nasty surprise customers would get when they walk into the business and learn that the actual quote for grooming is different than what they heard on the phone. \n\n The owners of the business tried their best at mitigating this issue over the phone, but mistakes do tend to slip by. \n\n  And this have resulted to losing trust of some long time customers.\n\n To help resolve their situation, I worked the owners to modernize their website to be fun, engaging and more interactive.\n\n Most importantly, it was configured to serve as a guide for customers to make it easy for them to identify their own dog's breed, weight and size. \n\nThus, on phone calls about quotes, customers can refer to this guide to accurately describe their dogs for the grooming session.\n\n Thus, with this accurate reporting, Moochi Dog Salon saw two remarkable improvements to their business.The employees are more likely to provide an accurate quote for grooming and a lot of time was saved by avoiding the need to interrogate the customers about all the necessary details about their dog.\n\n After working with them, Moochi Dog Salon has been providing a very smooth customer experience.",
    short: "Wordpress Site", 
    attributesHeader: "",
    attributes: [],
    thumbnail: MoochiDog,
    profileStyle: "standard",
    type: ["frontend"],
    technologies: ["word", "js", "css", "html"],
    technologyLink: ["Wordpress", "JavaScript", "CSS", "HTML"],
    path: "moochi-dog", 
    },
  {
    title: "Georgia Weight Loss Center",
    link: "http://gaweightlosscenter.com/",
    Github: "",
    description: "Andrea Mathis is a business woman and health coach who has a passion for helping her clients achieve healthier lives through fitness and better nutrition. \n She desired to reach to more clients on the internet but her outdated looking website was hindering her from doing so. \n I worked very closely with her on designing the layout and aesthetics of the website, making sure that every detail is perfectly close to how she imagined it. \n The website is entirely mobile responsive. \n As a result, I helped Andrea achieve a modern looking website that converts better and is more user-friendly.",
    attributesHeader: "",
    attributes: [],
    type: ["frontend"],
    thumbnail: GAweightloss,
    profileStyle: "standard",
    technologies: ["word", "js", "css", "html"],
    technologyLink: ["Wordpress", "JavaScript", "CSS", "HTML"],
    path: "georgia-weight-loss"
  },
  {
    title: "Weather App ",
    link: "https://albertyhu.github.io/Weather_App/",
    Github: "https://github.com/Albertyhu/Weather_App",
    description:
      "This is a weather app Iexpress've built with Webpack. When the user inputs their location onto the app, the app will indicate the current weather at there and the background changes based on the address that the user inputs. ",
    short: "Web Application", 
    attributesHeader: "",
    attributes: [],
    thumbnail: WeatherApp,
    type: ["frontend"],
      profileStyle: "standard",
    technologies: ["react", "js", "css", "html", "wpack"],
    technologyLink: ["ReactJS", "JavaScript", "CSS", "HTML", "Webpack"],
    path: "weather-app"
  },
  {
    title: "Battleship Game",
    link: "https://albertyhu.github.io/Battleship/",
    Github: "https://github.com/Albertyhu/Battleship",
    description:
      "This is a battleship game that I built with ReactJS JS and it involved a lot time spent testing functions with Jest. ",
    short: "JavaScript Application", 
    attributesHeader: "",
    attributes: [],
    thumbnail: Battleship,
    type: ["frontend"],
    profileStyle: "standard",
    technologies: ["js", "CSS", "HTML"],
    technologyLink: ["JavaScript", "CSS", "HTML"],
    path: "battleship"
    },
  {
    title: "Photo Tagging Search Game ",
    link: "https://photo-tagging-project.web.app/",
    Github: "https://github.com/Albertyhu/photo-tagging-project",
    description:
      "This is an Easter Hunt game built with ReactJS JS and Firebase. The object of the game is the find all characters inside picture while being timed. Once a character is found, a marker will be placed on that character. The locations of the characters are stored in Firestore and once the browser loads, the app will pull data of the location from Firebase. [image source: https://pxlcon.jimmysomething.com/]",
    short: "JavaScript Game",
    attributesHeader: "",
    attributes: [],
    thumbnail: ComicCon,
    type: ["frontend"],
    profileStyle: "standard",
    technologies: ["js", "css", "html"],
    technologyLink: ["JavaScript", "CSS", "HTML"],
    path: "photo-tagging"
  },
];

