import React from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import logo from '../src/assets/brand_logo (1).png'
import shoes from '../src/assets/shoe_image.png'
const App = () => {
  return (
<>
<div className="container min-h-screen  flex flex-col">
<Navbar imgSrc = {logo} />
<Main imgSrc = {shoes}/>
</div>

</>
  )
}

export default App