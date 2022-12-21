
import './App.css';

import { BrowserRouter, Route,Routes } from 'react-router-dom'
import {Search} from './components/Search';
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
