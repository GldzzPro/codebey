import React ,{   useContext , useRef , useState ,useLayoutEffect} from "react";
import { gsap } from "gsap";
import "../App.css" ;
import { Outlet , useNavigate, Link} from 'react-router-dom'
import svg from "../whitesvg.svg" ;
import AuthContext from "../context/AuthProvider";
import useAuth from "../hooks/useAuth";


const MainLayout = () => {
    const main = useRef();
    const [animationIsFinished, setAnimationIsFinished] = useState(false) ;
    const { setAuth } = useContext(AuthContext);
    const { auth } = useAuth();
    const navigate = useNavigate();

    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        navigate('/');
    }

    const mtl = useRef();

  useLayoutEffect(() => {
      
       console.log("layet out another time : "+animationIsFinished);
       const ctx = gsap.context(() => {
              mtl.current && mtl.current.progress(0).kill();
              mtl.current =   gsap.timeline().from(".nav", {
                delay : 1 ,
                duration : 1.2 ,
                opacity: 0,
                y: -200,
                ease: "easeInOut" ,
         
              }).from(".menu-links ul li", {
              
                duration : 3 ,
                opacity: 0,
                x: -200,
                ease: "easeInOut" ,
                stagger : 0.08
              }) ;
            }, main);


            return () => ctx.revert();
     
   
       
      }, [animationIsFinished]);
    return (
        <>
        { animationIsFinished &&  
         <div className="nav" ref={main}>
      <div className="menu-links">
        <ul>
          <li><img src={svg}/></li>
          <Link to="/"><li>Home</li></Link>  
          <Link to="courses"><li>courses</li></Link>  
          <Link to="/courses"><li>blogs</li></Link> 
          <Link to="/courses"><li>forum</li></Link> 
          <Link to="/courses"><li>resources</li></Link> 
          {auth.user && <li id="logout" onClick={logout} >Logout</li>}
        </ul>
      </div>

    </div>}
           

                    <Outlet context={[animationIsFinished, setAnimationIsFinished]}/>
            
        </>
    )
}

export default MainLayout