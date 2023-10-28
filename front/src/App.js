import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import AllRestaurants from './AllRestaurants';
import TopRated from './TopRated';
function App(){
    return(
        <Router>
            <Routes>
                <Route path='/AllRestaurants' element={<AllRestaurants/>} />
                <Route path='/TopRated' element={<TopRated/>}/>
            </Routes>
        </Router>
    );
}

export default App;