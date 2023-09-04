
    import React from 'react';
    import {useNavigate} from 'react-router-dom';
    import './home.css';
    import Header from './header';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Michale from './michael.jpeg'
    import PortfolioCarousel from  './portfolio'
    
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
    <div>
        <h1 id='companyDescription'> Welcome to A&M - Your Trusted Partner in Building Dreams!</h1>

<p>At A&M, we are more than just builders; we are craftsmen, dreamweavers, and solution providers. With decades of experience in the construction industry, we have been transforming commercial spaces and privately owned homes into functional, beautiful, and sustainable structures. </p>
    </div>
    
        <div>
            <PortfolioCarousel/>
        </div>
        </div>

               
              
             
            
           
              
        )
    }
    
    export default Home;
