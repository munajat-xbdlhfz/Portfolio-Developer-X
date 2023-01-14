import React from 'react'

import { Navbar, Footer } from './components'
import { AboutMe, BlogArticles, MyPortfolio, MySkills, Hero, Snippets, Testimonials, WorkingTogether } from './sections'

const App = () => {
  return (
    <div className='bg-primary-black overflow-hidden'>
      <div className='relative z-20'>
        <Navbar />
      </div>
      <Hero />
      <div className='bg-secondary-black'>
        <AboutMe />
      </div>
      <MySkills />
      <div className='bg-secondary-black'>
        <MyPortfolio />
      </div>
      <Testimonials />
      <div className='bg-secondary-black'>
        <BlogArticles />
      </div>
      <Snippets />
      <div className='bg-secondary-black'>
        <WorkingTogether />
      </div>
      <div className='border-t border-[rgba(255,255,255,0.3)]'>
        <Footer />
      </div>
    </div>
  )
}

export default App