/*
  React Router DOM is a powerful library designed for routing in React applications, 
  enabling developers to create dynamic, multi-page experiences within single-page applications (SPAs). 
  It allows for seamless navigation between different views without requiring a full page reload, which 
  enhances user experience by making applications feel faster and more responsive13.
  
  Key Features
  
  1.Dynamic Routing: React Router DOM facilitates dynamic routing by mapping URLs to specific components, 
  allowing for complex navigation structures including nested routes and route parameters14.
  
  2.Component-Based Routing: The library uses a component-based approach to routing, which integrates well 
  with React's declarative nature. This means that routes can be defined using components like 
  <Route>, <Link>, and <Router>4.
  
  3.URL Synchronization: It keeps the UI in sync with the URL, ensuring that users can navigate using standard 
  browser controls like back and forward buttons
*/



import { useNavigate } from "react-router-dom"
import myImage from '../assets/backiee-265247.jpg'
export function Aboutus(){

    const navigate = useNavigate();

    const navigateToPage=()=>{
        navigate('/Home');
    };

  return (
    <div>
        <img src={myImage} align="right" height="80px" alt="" onClick={navigateToPage} />
        <h1>About Us Component</h1>
        <h2>Put your Company Information Here</h2>
    </div>
  )
}
