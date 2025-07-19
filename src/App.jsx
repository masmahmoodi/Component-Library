import React from 'react'
import Badges from './components/Badges/Badges'
import badgeData from './data/badgeData'
import Banners from './components/Banners/Banners'
import bannerData from './data/bannersData'
import Cards from './components/Cards/Cards'
import TestimonialsWithImg from './components/Testimonials/TestimonialsWithImg'
export default function App(){
  
const badgesToDisplay = badgeData.map((badge,index) =>{
  return (
    <Badges  color={badge.color} textColor={badge.textColor} shape={badge.shape} key={index}>
        Badges
      </Badges>
  )
})


const bannersToDisplay = bannerData.map(banner=>{
  return(
  <Banners icon={banner.icon} state={banner.state}txt={banner.txt} backgroundColor={banner.backgroundColor} txtColor={banner.txtColor}icon_color={banner.icon_color} />
  )
})
  return (
   <>
    <h1  className='badge-heading'>Badges</h1>
    <div className='badges-container'>{badgesToDisplay}</div>
    <h1  className='badge-heading'>Banners</h1>
    <div className='banners-container'>
     {bannersToDisplay}
    </div>
    <h1  className='badge-heading'>Cards</h1>
    <div className='card-container'>
      <Cards card_title={"Easy Deployment"}>
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis
      </Cards>
      <Cards card_title={"Easy Deployment"}>
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis
      </Cards>
    </div>
    <div className='testimonial-container'>
      <TestimonialsWithImg />
    </div>
   </>
  )
}
