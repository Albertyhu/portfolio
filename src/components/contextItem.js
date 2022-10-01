import React, { createContext } from 'react'

//context for passing data from renderPage.js to its children.
export const HomeContext = createContext(); 

//context for passing data from App.tsx to its children 
export const AppContext = createContext(); 

//context for passing data from navBar.js to its children 
export const NavBarContext = createContext(); 