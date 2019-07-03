import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import {Link} from 'react-router-dom'
import Services from '../component/Services'
import FeaturedRoom from '../component/FeaturedRoom'

const Home = () => {
  return (
     <>
        <Hero>
            <Banner title="luxurious rooms" subtitle="deluxe rooms startig at $299">
                <Link to="/rooms" className="btn-primary">
                    our rooms
                </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRoom />
    </>
  )
}

export default Home
