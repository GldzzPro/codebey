import "../styles/layouts/cources.css" ;
import  React, { useLayoutEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import png from "../python.svg";
import {Link ,useOutletContext } from "react-router-dom";




export default function Courses() {
  const [animationIsFinished, setAnimationIsFinished] = useOutletContext();
  const showNav = ()=> setAnimationIsFinished(true) ;
   
  useLayoutEffect(()=>{
    showNav();
  },[])
  return (
    <div className="body">
    <section className="courses-section">
    <h1>Erolled Cources</h1>
    <div className="area"> 
    <Link to="python">
    <div className="box grid-item">
     <p> python</p>
    <img src={png} className="llogo"/>
     
    </div>
    </Link> 
    <div className="box grid-item">
    <p> python</p>
    <img src={png} className="llogo"/>

    </div>

    <div className="box grid-item">
    <p> python</p>
    <img src={png} className="llogo"/>
    </div>

    <div className="box grid-item">
    <p> python</p>
    <img src={png} className="llogo"/>

    </div>

    <div className="box grid-item">
    <p> python</p>
    <img src={png} className="llogo"/>

    </div>

    <div className="box grid-item">
    <p> python</p>
    <img src={png} className="llogo"/>
    </div>
    

    </div>

    </section>

    <section className="courses-section">
    <h1>Enroll New Cources</h1>
    <div className="area"> 
    <Link to="python">
    <div className="box grid-item">
     <p> python</p>
    <img src={png} className="llogo"/>
     
    </div>
    </Link> 
    <div className="box grid-item">
    <p> python</p>
    <img src={png} className="llogo"/>

    </div>

    <div className="box grid-item">
    <p> python</p>
    <img src={png} className="llogo"/>
    </div>

    <div className="box grid-item">
    <p> python</p>
    <img src={png} className="llogo"/>

    </div>

    <div className="box grid-item">
    <p> python</p>
    <img src={png} className="llogo"/>

    </div>

    <div className="box grid-item">
    <p> python</p>
    <img src={png} className="llogo"/>
    </div>
    

    </div>

    </section>
    </div>
    
  );
}