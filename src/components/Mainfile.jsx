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



import {Routes,Route,Link} from 'react-router-dom'
import {Home,Aboutus,Contactus} from './index'
export function Mainfile() {
  return (
    <>
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
            <a href="/Home" className='navbar-brand'>All Components</a>
            <div className='navbar-nav mr-auto'>
                <li className='nav-item'>
                    <Link to='/Home' className='nav-link'>Home</Link>
                </li>

                <li className='nav-item'>
                    <Link to='/Aboutus' className='nav-link'>About Us</Link>
                </li>

                <li className='nav-item'>
                    <Link to='/Contactus' className='nav-link'>Contact Us</Link>
                </li>
            </div>
        </nav>

        <Routes>
            <Route path="Home" element={<Home/>}/>
            <Route path="Aboutus" element={<Aboutus/>}/>
            <Route path="Contactus" element={<Contactus/>}/>
        </Routes>
    </>
  )
}
