import React from 'react'
import './App.css'
import Description from './Description'

function App() {
return (
    <div className='bg'>

      <Description />

      <div className='image'>
        <img src='/PEPSI1.png'/>
      </div>

      <div className='volume'>
        <h3>330 ml</h3>
        <p>Serving Size.</p>
        <p  className='volume-para'>1 serving<br/>per container</p>
      </div>
    </div>
  )
}

export default App