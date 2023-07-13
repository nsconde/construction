
    import React from 'react';
    import {useNavigate} from 'react-router-dom';
    import './home.css';
    import Header from './header';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Michale from './michael.jpeg'
    
    const Home = ()=>{
        const url = 'https://www.facebook.com/Laurisnotaryservices/';
        const navigate=useNavigate();
        const navigateToContact =()=>{
            navigate('/contact');
        }
        return(
        
            <div id='head'>
                <h1 id="heading"><Header/></h1>
            <div id="column">
                <img id="kitchen" src={Michale} alt="kitchen"/>
        
        </div>
        </div>

               
              
             
            
           
              
        )
    }
    
    export default Home;
