import React, { useState, useEffect, useRef, useContext, createContext, useCallback } from 'react';
import { ProjectList } from '../components/project_panel/projects.js';
import styled from 'styled-components';
import uuid from 'react-uuid'; 
import { useLocation } from 'react-router-dom'


const RenderProjectProfile = props => {
    const location = useLocation(); 
    const { index } = location.state; 
    const project = ProjectList[index];
return(<></>)
}

export default RenderProjectProfile; 

const MainCont = styled.div`
height: 100%; 
width: 100%; 
`