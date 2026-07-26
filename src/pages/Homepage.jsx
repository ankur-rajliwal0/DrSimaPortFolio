import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutDocter from '../components/AboutDocter'
import Services from '../components/Services'
import Qualifications from '../components/Qualifications'
import ConsultationProcess from '../components/ConsultationProcess'
import Expertise from '../components/Expertise'
import Contact from '../components/Contact'
import WhyChoose from '../components/WhyChoose'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutDocter/>
      <Services/>
      <WhyChoose/>
      {/* <Qualifications/> */}
      <ConsultationProcess/>
      <Expertise/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Homepage
