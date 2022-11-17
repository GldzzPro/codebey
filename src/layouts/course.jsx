import React ,{ useLayoutEffect } from 'react'
import Content from '../components/Content'
import Title from '../components/Title'
import Certificat from '../components/Certificat'
import "../styles/layouts/course.css"
import { useOutletContext } from "react-router-dom";




export default function Course() {
  const [animationIsFinished, setAnimationIsFinished] = useOutletContext();
  const showNav = ()=> setAnimationIsFinished(true) ;
   
  useLayoutEffect(()=>{
    showNav();
  },[])
  return (
    <div className='course-body'>
    <Title/>
    <Content/>
    <Certificat/>
    </div>
  )
}
