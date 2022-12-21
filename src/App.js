import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Octokit } from "@octokit/rest";
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import {Search} from './components/Search';
import axios from 'axios';
import {Card} from './components/Card';
function App() {

 
  

  
  return (
    
      <BrowserRouter>
       <Routes>
        <Route path="/" exact element={<Search></Search>} />
        <Route path ="/Cards" exact element={<Card></Card>}/>
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
