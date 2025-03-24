import './navBarPractice.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'



const navBarPractice  = () => {
 
    return (
        <>
     <nav className='navbar'>
        <div className='nav-title'>
      
        <FontAwesomeIcon icon={faHouse} />  
        <h4>My First Project</h4>
    
      
            </div>
        
      <div className='nav-links'>
            <div><a href='/'>Home</a></div>
            <div><a href='/'>About</a></div>
            <div><a href='/'>Services</a></div>
            <div><a href='/'>Contact</a></div>
        </div>
     
     </nav>
     </>
    )
  }


export default navBarPractice
