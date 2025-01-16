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
