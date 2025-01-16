import {useNavigate} from 'react-router-dom';

export function Contactus(){
  
  const navigate = useNavigate();

  const navigateToPage=()=>{
    navigate('/Home');
  };
  
    return (
    <div>
        <h1>Contactus Component </h1>
        <h1>This my simple Contactus Component</h1>
        <button onClick={navigateToPage}>Navigate to Home</button>
    </div>
  )
}
