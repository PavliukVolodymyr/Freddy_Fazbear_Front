import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import AllRestaurants from './AllRestaurants';
import TopRated from './TopRated';
import MainDishes from './MainDishes';
import All from './All';



function App(){
    return(
        
        <Router>
            <Routes>
                <Route path='/AllRestaurants' element={<AllRestaurants/>} />
                <Route path='/' element={<TopRated/>}/>
                <Route path='/MainDishes' element={<MainDishes/>}/>
                <Route path='/All' element={<All/>}/>
            </Routes>
        </Router>
    );
}

export default App;