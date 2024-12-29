import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSellers'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/Newsletter'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LatestCollection></LatestCollection>
      <BestSeller></BestSeller>
      <OurPolicy></OurPolicy>
      <NewsletterBox></NewsletterBox>
    </div>
  )
}

export default Home