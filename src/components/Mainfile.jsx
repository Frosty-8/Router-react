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
