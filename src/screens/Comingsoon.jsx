import React from 'react'
import { Header } from '../components/Header'
import MyTimer from './MyTimer';
import SubscribeForm from './SubscribeForm ';
function Comingsoon() {

    
  const time = new Date();
  time.setDate(time.getDate() + 24); 
  time.setHours(time.getHours()+12); 
  time.setMinutes(time.getMinutes() ); 
  return (
  
    <>
    <Header/>
   
    <div className="banner-outerwrap">
        <div className="container">
            <div className="banner-innerwrap">
                <h4>We are available in</h4>
                <div className="wrapper">
                   
                               <MyTimer   expiryTimestamp={time} />
                     
                </div>
                <h1>Get Ready for a <span>life of ease </span> never lose a good tip again!</h1>
                <p>Unveiling soon: The place to store all those great tips you've found along the way!</p>
               
                <SubscribeForm/>
                <div className="premiun-features-outerwrap">
                    <ul>
                        <li><img src="images/user-1.png" alt=""/></li>
                        <li><img src="images/user-2.png" alt=""/></li>
                        <li><img src="images/user-3.png" alt=""/></li>
                        <li><img src="images/user-4.png" alt=""/></li>
                    </ul>
                    <span>Join the first 2k subscribers for 3 year free trial of our premium features!</span>
                </div>
            </div>
        </div>
    </div>
   
    
    
    </>
  )
}

export default Comingsoon