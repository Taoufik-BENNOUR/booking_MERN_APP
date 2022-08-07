import React from 'react'
import Featured from '../components/featured/Featured'
import FeaturedProperties from '../components/featuredProperties/FeaturesProperties'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import MailList from '../components/mailList/MailList'
import Navbar from '../components/navbar/Navbar'
import PropertyList from '../components/propertyList/PropertyList'

const Home = () => {
  return (
    <>
    <Navbar />
    <Header/>
    <div className='homeContainer'>
        <Featured/>
        <h1 className='homeTitle'>Browse</h1>
        <PropertyList />
        <h1 className='homeTitle'>Home guests love</h1>
        <FeaturedProperties />
        <MailList/>
        <Footer/>
    </div>
    </>
  )
}

export default Home;