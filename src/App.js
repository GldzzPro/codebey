import React ,{ useEffect , useRef , useState ,useLayoutEffect} from "react";
import { gsap } from "gsap";
// import "./App.css" ;
import MainLayout from "./layouts/Main";
import Courses from "./layouts/courses";
import Course from "./layouts/course";
import Home from "./layouts/home";
import Login from "./layouts/Login";
import Register from "./layouts/Register";
import Admin from './components/Admin';
import Unauthorized from './components/Unauthorized';
import RequireAuth from './components/RequireAuth';
import { Application } from 'react-rainbow-components';
import { Route, Routes} from "react-router-dom";



export default function App() {
  return <>
  
  <Routes>
  <Route path="/" element={<MainLayout />}>
   <Route path="login" element={<Login />}/>
   <Route path="register" element={<Register />}/>
   <Route path="unauthorized" element={<Unauthorized />} />
   <Route index element={<Home />} />
   <Route element={<RequireAuth allowedRoles={['User','Admin']} />}>
          <Route path="courses" element={<Courses />} />
   </Route>
   <Route element={<RequireAuth allowedRoles={['Admin']} />}>
          <Route path="courses/python" element={<Course/>} />
        </Route>
   <Route element={<RequireAuth allowedRoles={['Admin' ]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>
  </Route>
  </Routes>
  </>
    
  
};
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
       
      
      




          