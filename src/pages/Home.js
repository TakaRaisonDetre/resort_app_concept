import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

const Home=() =>{
    return (
      <>
      <Hero hero="defaultHero">
            <Banner title="luxurious rooms" subtitle=" delux glamping starting from $150">
           <Link className="btn-primary" to="/rooms">our rooms</Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms />
        </>      
    )
}

export default Home