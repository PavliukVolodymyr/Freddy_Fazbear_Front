import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import AllRestaurants from './AllRestaurants';
import TopRated from './TopRated';
import MainDishes from './MainDishes';
import All from './All';
import AUTH from './AUTH';
import UserAccount from './UserAccount';
import Contact from './Contact';
import Cart from './Cart';
import CartOrder from './CartOrder';

function App(){
    return(
        
        <Router>
            <Routes>
                <Route path='/AllRestaurants' element={<AllRestaurants/>} />
                <Route path='/' element={<TopRated/>}/>
                <Route path='/MainDishes' element={<MainDishes/>}/>
                <Route path='/All' element={<All/>}/>
                <Route path='/Auth' element={<AUTH/>}/>
                <Route path='/UserProfile' element={<UserAccount/>}/>
                <Route path='/Contact' element={<Contact/>}/>
                <Route path='/Cart' element={<Cart/>}/>
                <Route path='/CartOrder' element={<CartOrder/>}/>
            </Routes>
        </Router>
    );
}

export default App;